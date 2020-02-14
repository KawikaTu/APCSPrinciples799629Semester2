//The awk script that generated the ~50,000 rows of code was this single line:

$ awk -F, -v OFS='' -v qqq="'" -v comma="','" '{if (NR>1) print "newRow= new p5.TableRow(", qqq, substr($0,1,length($0)-1), qqq ,",
",comma,");", "\n    stats.addRow(newRow);"}'
nba-players-stats/Seasons_Stats.csv > stats.js

//I wrapped this code manually around the output of that script:

function loadStats() {
     stats = new p5.Table();

     // .... then add the programmatically generated code

}//end function loadStats
