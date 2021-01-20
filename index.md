![Tasmota Plus](assets/images/TasmotaPlus_small.png)
# Tasmota-Plus
[UBWH](https://ubwh.com.au) has developed an enhanced version of [Tasmota](https://tasmota.github.io/docs/ "Tasmota") with additional features making it better suited for use by IT professionals.

## Why Tasmota?
[Internet of Things](https://en.wikipedia.org/wiki/Internet_of_things "IoT") (IoT) devices are Internet-connected smart appliances. 

Unfortunately, many IoT devices are controlled via a cloud server; commonly in China. Also, there is generally no way to control these devices using remote commands from (e.g.) a PHP script running on a separate computer.

Tasmota devices work differently; they are controlled via
1. the built-in Web server [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface)
1. http URLs: e.g. [http://My.IP.Address.com/cm?cmnd=Power1%20On](http://My.IP.Address.com/cm?cmnd=Power1%20On)
1. [MQTT](https://mqtt.org/)
1. [openHAB](https://www.openhab.org/)
1. [Many others...](https://tasmota.github.io/docs/Integrations/)
  
## Why Tasmota-Plus?
This table summarises the differences between normal **Tasmota** and **Tasmota-Plus**.

| Feature                        | Tasmota Standard | Tasmota-Plus |       
| :------------------------------|:------------:|:------:|
|[WAN Security](#wan-security)|❌|✔️|
|[Clock config page](#clock-config-page)|❌|✔️|
|[Ping command](#ping-command)|❌|✔️|
|[Ping watchdogs](#ping-watchdogs)|❌|✔️|
|[WiFi signal strength indicator](#wifi-signal-strength-indicator)|❌|✔️|
|Works with [MQTT](https://mqtt.org/)|✔️|✔️|
|Works with [Domoticz](https://www.domoticz.com/)|✔️|✔️|

## Tasmota-Plus Features

### WAN Security ###  
<img src="assets/images/TasmotaPlus_WANsecurity.jpg" width="200px">

Prevent commands being executed unless coming from a nominated IP address.

### Clock Config Page ###
<img src="assets/images/TasmotaPlus_ClockPage.png" width="200px">

Allowing setting of parameters (Time zone, Daylight saving, ...) so that the Real Time Clock is accurate.

### Ping Command ###
<img src="assets/images/TasmotaPlus_PingCmnd.png" width="150px">

Commands such as ping 8.8.8.8 can be issued from the Console command line. 
See [Tasmota Ping command](https://tasmota.github.io/docs/Commands/#ping) for more information.

### Ping Watchdogs ###
<img src="assets/images/TasmotaPlus_PingPage.png" width="300px">

Enabling cycling of socket power if pings to a nominated IP address fail.

### WiFi signal strength indicator ###
<img src="assets/images/TasmotaPlus_WiFi_Indicator01.png" width="200px">

Visualisation of the WiFi signal strength as seen by the Tasmota device.

With _Tasmota Standard_, WiFi signal level is only available in the _Information_ page. 


## Products Available with Tasmota-Plus


| Part Number     | [SP-Plug-AU](https://ubwh.com.au/SP-Plug-AU) | [SP-Strip-AU](https://ubwh.com.au/SP-Strip-AU)       
| :---------------|:------------:|:--------: 
| Image | <img src="assets/images/SP-Plug-AU_01.png" width="100px">|<img src="assets/images/SP-Strip-AU_01.png" width="200px">
| Description | A single-outlet, voltage and power monitoring Australian Smart Plug.|A 4-outlet Australian Smart Power Strip. 
| Main page|<img src="assets/images/SP-Plug-AU_main.png" width="200px">|<img src="assets/images/SP-Strip-AU_main.png" width="200px">
| User Guide|[User Guide](https://github.com/UBWH/ubwh.github.io/blob/master/assets/UserGuides/UG-SP-Plug-AU.pdf)|[User Guide](https://github.com/UBWH/ubwh.github.io/blob/master/assets/UserGuides/UG-SP-Strip-AU.pdf)
| Firmware | [Releases](https://ubwh.com.au/tasmota/Tasmota-Plus/SP-Plug-ReleaseNotes.php) | [Releases](https://ubwh.com.au/tasmota/Tasmota-Plus/SP-Strip-ReleaseNotes.php)

| Part Number     | [SS-1CHPro](https://ubwh.com.au/SS-1CHPro) |   [SS-4CHPro](https://ubwh.com.au/SS-4CHPro) |    
| :---------------|:------------:|:------------:|
| Image | <img src="assets/images/SS-1CHPro.png" width="100px">|<img src="assets/images/SS-4CHPro.jpg" width="100px">|
| Description | A 1-Channel Smart Relay/Switch| A 4-Channel Smart Relay/Switch|
| Main page|<img src="assets/images/SS-1CHPro_Main.png" width="200px">|<img src="assets/images/SS-4CHPro_main_.png" width="200px">|
| User Guide|[User Guide](https://github.com/UBWH/ubwh.github.io/blob/master/assets/UserGuides/UG-SS-1CHPro.pdf)|[User Guide](https://github.com/UBWH/ubwh.github.io/blob/master/assets/UserGuides/UG-SS-4CHPro.pdf)|
| Firmware | [Releases](https://ubwh.com.au/tasmota/Tasmota-Plus/SS-1CHPro-ReleaseNotes.php) |[Releases](https://ubwh.com.au/tasmota/Tasmota-Plus/SS-4CHPro-ReleaseNotes.php) |


## Firmware Upgrade Instructions
* With your local computer: Visit the _Firmware_ URL for your device (see above)
* Download and save both files for the release you want (tasmota-XXXXX-minimal.bin.gz & tasmota-XXXXX.bin.gz)
* Open the Main page of your Tasmota-Plus device
* Click __Firmware Upgrade__
* Click __Choose file__
* Select the tasmota-XXXXX.bin.gz file just downloaded
* Click __Start upgrade__
* If that did not work: 
  * Upload the tasmota-XXXXX-minimal.bin.gz file
  * Wait for the Tasmota-Plus device to reboot.
  * Upload the tasmota-XXXXX.bin.gz file
  





