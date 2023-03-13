const projects = [
    "emotionRecognition",
    "multilingualG2P",
    "lexiconEnrichment",
    "infrastructureUpgrade",
    "entityDisambiguation",
    "proceduralTerrain",
    "proceduralCity"
];

$(document).ready(function() {
var body = document.getElementsByTagName('body')[0];
var iFrames = document.createElement('div');
iFrames.id = 'project_iFrames';

for (var i = 0; i < projects.length; i++) {
    var iFrame = document.createElement('iframe');
    iFrame.id = projects[i];
    iFrame.src = 'assets/projects/' + projects[i] + '.md';
    iFrame.title = projects[i];
    iFrames.appendChild(iFrame);
};
;

body.appendChild(iFrames);

});