const projects = [
    "emotionRecognition",
    "entityDisambiguation",
    "infrastructureUpgrade",
    "lexiconEnrichment",
    "multilingualG2P",
    "proceduralCity",
    "proceduralTerrain",
];

$(document).ready(function() {
// find head
var body = document.getElementsByTagName('body')[0];
var iFrames = document.createElement('div');
iFrames.id = 'project_iFrames';
for (var i = 0; i < projects.length; i++) {
    // create link
    var iFrame = document.createElement('iframe');
    iFrame.id = projects[i];
    // embed.hidden = true;
    // embed.ariaHidden = true;
    // script.rel = 'preload';
    // script.type = 'text/markdown';
    iFrame.src = 'assets/projects/' + projects[i] + '.md';
    iFrame.title = projects[i];
    // append link
    iFrames.appendChild(iFrame);
};
body.appendChild(iFrames);

});
