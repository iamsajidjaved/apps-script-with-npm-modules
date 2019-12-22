function doGet() 
{
	var output = 'Today is '+AppLib.getTodaysDateLongForm()+"\n\n";
	
	return ContentService.createTextOutput(output);
}