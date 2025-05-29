const LHT52_regions = ["EU868", "US915", "IN865","AU915","KZ865","RU864", "AS923", "AS923-1", "AS923-2", "AS923-3"];

function str_pad(byte) {
  var zero = '0';
  var hex = byte.toString(16);
  var tmp = 2 - hex.length;
  return zero.substr(0, tmp) + hex;
}

function decodeUplink(input) {
  var port = input.fPort;
  var bytes = input.bytes;
  var data = {};
  data.vendor = 'Dragino';
  data.Node_type = 'LHT52';
 
  switch (input.fPort) {
    case 2:
      {
        if (bytes.length == 11) {
          data.TempC_Internal = parseFloat(((((bytes[0] << 24) >> 16) | bytes[1]) / 100).toFixed(2));
          data.Hum_Internal = parseFloat(((((bytes[2] << 24) >> 16) | bytes[3]) / 10).toFixed(1));
          var TempC = (bytes[4] << 8) | bytes[5];
          if (0x7FFF == TempC) {
            data.Ext_SensorConnected = 0;
          } else {
            data.Ext_SensorConnected = 1;
            data.TempC_External = parseFloat((TempC / 100).toFixed(2));
          }
          data.Ext = bytes[6];
          data.Systimestamp = (bytes[7] << 24) | (bytes[8] << 16) | (bytes[9] << 8) | bytes[10];
        } else {
          data.Status = 'RPL data or sensor reset';
        }
      }
      return {
        data: data,
      };
      break;

    case 3:
      {
        data.Status = 'Data retrieved, your need to parse it by the application server';
      }
      return {
        data: data,
      };
      break;

    case 4:
      {
        data.DS18B20_ID = str_pad(bytes[0]) + str_pad(bytes[1]) + str_pad(bytes[2]) + str_pad(bytes[3]) + str_pad(bytes[4]) + str_pad(bytes[5]) + str_pad(bytes[6]) + str_pad(bytes[7]);
      }
      return {
        data: data,
      };
      break;

    case 5:
      {
        data.Sensor_Model = bytes[0];
        data.Firmware_Version = str_pad((bytes[1] << 8) | bytes[2]);
        data.Freq_Band = bytes[3]; 
        data.Region = LHT52_regions[data.Freq_Band-1];
        data.Sub_Band = bytes[4];
        data.Bat_V = parseFloat((((bytes[5] << 8) | bytes[6]) / 1000).toFixed(2));        

      }
      return {
        data: data,
      };
      break;

    default:
      return {
        errors: ['unknown FPort'],
      };
  }
}

function normalizeUplink(input) {
  var data = [];

  if (input.data.TempC_Internal) {
    data.push({
      air: {
        location: 'indoor',
        temperature: input.data.TempC_Internal,
        relativeHumidity: input.data.Hum_Internal,
      },
    });
  }

  if (input.data.TempC_External) {
    data.push({
      air: {
        location: 'outdoor',
        temperature: input.data.TempC_External,
      },
    });
  }

  if (input.data.Bat_mV) {
    data.push({
      battery: input.data.Bat_mV,
    });
  }

  return { data: data };
}

/*************************************************
Reference: https://www.chirpstack.io/docs/chirpstack/integrations/mqtt.html#scheduling-a-downlink

Example MQTT message

TOPIC: application/aeb3c886-1cef-4842-a70f-730b118fb1f7/device/a840414e4f5cae3d/command/down
  {
  "devEui": "a840414e4f5cae3d",
  "confirmed": false,
  "fPort": 1,
  "object": {
    "command": "AA01000200150020"     <---- HEX Downlink Command. Not Base64
  }
}
**************************************************/
function encodeDownlink(input) {
  var command = input.data.command;
  var output = [];

  for (var i=0,j=0; i<command.length; i+=2,j++) {
   output[j]=parseInt(command.substr(i,2), 16);
  }

  return {bytes: output};
}
