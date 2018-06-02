GECentricity
============

Centricity is a brand of healthcare IT software solutions from GE Healthcare, a division of General Electric.

The GECentricity is subproject of mdObject initiative to simplify patient medical record exchange.
The $mdObject is simple JSON stricture that is easy to implement and to use.
The mdObject is stand for [M]edical [D]ata Object. 

For users of GE Centricity EMR9.8 Evaluation version, execute the following line to enable ActiveX component:  

Regsvr32 "C:\Program Files (x86)\Centricity EMR 9.8 Evaluation\GE.EMR.Msg.IF.dll"

Use IE9+ for demo. 

Default location for your own HTML Encounter forms in CPS12+: 
	%JBOSS.SERVER.HOME.DIR%\server\default\deploy\demo.ear\CentricityPracticeWS.war\
EMR9.8 Evaluation: 
	C:\Program Files (x86)\Centricity EMR 9.8 Evaluation\jboss\server\default\deploy\Default.ear\CentricityPracticeWS.war\

To setup demo page:
	1. Create a new folder in the "Default location for your own HTML Encounter forms" called mdObject
	2. Create a subfolder called mdObjectDemo
	3. Copy content of the ..\mdObject\examples\angular.js\ folder into the mdObjectDemo folder.
	4. Add a Quick Text as following:
		.mdObjectDemo {show_html_form("//localserver/mdObject/mdObjectDemo/index.html","$mdObject Feature Demo Page")}
	5. Open patient chart and a new document 
	6. Type .mdObjectDemo and press Enter key.



Here is the example how to create a new observation (jQuery is used below to pull the height value from HTML control):

    var currentDate = new Date();
    var obsDate = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
    var height = $("#Height").val();
    var heightObs = new $mdObject.Observation();
    heightObs.name = "HEIGHT";
    heightObs.value = height;
    heightObs.date = obsDate;
    heightObs.save();
