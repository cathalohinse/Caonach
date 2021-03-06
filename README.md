# Caonach
Computer Systems &amp; Networks Assignment 2

This is a home heating solution of sorts, whose main focus is on the maintanance of derilict/vacant buildings, by controlling their internal temperature & humidity.
A Sensehat mounted RPI, measures the temperature & humidity of the room in which it is located. It then performs a calculation on this data in python. The Calculation is carried out based on a table in an attached excel file ('Device Trigger Calculation'). The intention of this IoT app is to power the smart plug in conditions of high humidity (>55%), and low temperature (<20°C). I used this table to determine that by using the quotient of the Temperature (dividend) and Humidity (divisor) as a setpoint, the smart plug could be configured to only switch on when temperature and humidity combinations are observed that return a quotient above this setpoint, as this would mean that most instances of temperature and humidity above and below the respective temperature & humidity setpoints (55% and 20°C respectively - as indicated above), would trigger the device. Please refer to the tables in the ‘Device Trigger Calculation’ excel file for a better explanation. If I had more time, I would have developed a more complex formula that would completely omit any temperature or humidity values outside of the specified limits. Or alternatively, I was considering setting the table up as an array in an SQL database that could be called upon to help determine what values to trigger the device. The one positive from this system, is its dynamic nature – the temperature and humidity can be inserted into the table to return the desired quotient which in turn is written into Thingspeak.
Thingspeak is able to use this data to control a smart plug that the storage heater/air conditioner is controlled by, via http and IFTTT. I have not been able to communicate directly via the Smart Plug’s API.
I have set up a broadcast to an MQTT broker and a subscriber of same, but I figured that a more suitable solution would be for a Realtime database, that would only record the temperature and humidity (along with the timestamp) when the device is triggered to switch on - I therefore set up this system also. I had intended on performing calculations on this data using Mongodb aggregation, to return the amount of time that the device had been active (cost control for the home customer using this solution). However, I ran out of time, and was unable to set up a system whereby queries could be made on data. Nevertheless, using a much more rudimentary approach (basic python arithmetic), the amount of time that the device is switched on for is still recorded, and it is printed to the RPI console, as per video: https://www.youtube.com/watch?v=zWSEbet7TJ8.
I also attempted to deploy glitch to my firebase database (as per https://glitch.com/edit/#!/norriehenchymonitor?path=firebase.json%3A1%3A0), but glitch froze each time I attempted this, so the glitch app is not a part of my system.

Summary:
-	Successfully implemented a temperature & humidity control system, based on real events.
-	Successfully set up a system whereby the temperature and humidity recorded by the sensehat is recorded in firebase only when the device is triggered to switch on.

Associated links:
- https://www.youtube.com/watch?v=EbL4rYfTio8
- https://www.youtube.com/watch?v=qDTBP574RAE
- https://www.youtube.com/watch?v=zWSEbet7TJ8
- https://thingspeak.com/channels/1269751/private_show
- https://thingspeak.com/apps/reacts/76310
- https://thingspeak.com/apps/reacts/76326
- https://thingspeak.com/apps/thinghttp/145390
- https://thingspeak.com/apps/thinghttp/145436
- https://glitch.com/edit/#!/norriehenchymonitor?path=firebase.json%3A1%3A0
- https://console.firebase.google.com/u/0/project/norriehenchymonitor-b5883/database/norriehenchymonitor-b5883-default-rtdb/data/~2Ffile

Documents that are of most relevance for grading:
- Assignment 2 Submission.docx
- Device Trigger Calculation.xlsx
- Monitor.py.txt
- storeFileFB.py
