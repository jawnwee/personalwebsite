PSD = Framer.Importer.load("imported/firstMock")

dimmingView = PSD.dimmingView;

resumeButton = PSD.resumeButton;
guitarButton = PSD.guitarButton;
gameButton = PSD.gameButton;
blogButton = PSD.blogButton;

internetHighlighted = PSD.internetHighlighted;
emailHighlighted = PSD.emailHighlighted;
phoneHighlighted = PSD.phoneHighlighted;
twitterHighlighted = PSD.twitterHighlighted;

resume = PSD.Resume;
fullResume = PSD.fullResumeButton;
exitResume = PSD.Exit;

notReady = new Layer({
  width: 350,
  height: 180,
  scale: 0,
  borderRadius: "8px",
  backgroundColor: "#28acff",
  color: "white"
});
notReady.center()
notReady.style = {
  "font-size": "30px",
  "text-align": "center",
  "line-height": "60px"
}
notReady.html = 'Resume is not ready yet :(... An amazing one coming soon';

resume.scale = 0.0;
dimmingView.opacity = 0.0;
internetHighlighted.opacity = 0.0;
emailHighlighted.opacity = 0.0;
phoneHighlighted.opacity = 0.0;
twitterHighlighted.opacity = 0.0;


resumeButton.on(Events.MouseOver, function() {
  return resumeButton.animate({
    properties: {
      scale: 1.2
    },
    curve: 'spring'
  });
});
resumeButton.on(Events.MouseOut, function() {
  return resumeButton.animate({
    properties: {
      scale: 1
    },
    curve: 'spring'
  });
});
resumeButton.on(Events.Click, function() {
  dimmingView.opacity = 1.0;
  resume.animate({
    properties: {
      scale: 1
    },
    curve: 'spring',
    curveOptions: {
      friction: 40
    }
  });
});
fullResume.on(Events.Click, function() {
  popUp = notReady.animate({
    properties:{
      scale: 1
    },
    curve:'spring',
    curveOptions: {
      friciton: 40
    }
  });
  return popUp.on('end', function() {
    return notReady.animate({
      properties: {
        scale: 0
      },
      curve: 'cubic-bezier',
      time: 1
    });
  });
});
exitResume.on(Events.Click, function() {
  dimmingView.opacity = 0.0;
  resume.animate({
    properties: {
      scale: 0
    },
    curve: 'spring',
    curveOptions: {
      friction: 40
    }
  });
});


guitarButton.on(Events.MouseOver, function() {
  return guitarButton.animate({
    properties: {
      scale: 1.2
    },
    curve: 'spring'
  });
});
guitarButton.on(Events.MouseOut, function() {
  return guitarButton.animate({
    properties: {
      scale: 1
    },
    curve: 'spring'
  });
});
guitarButton.on(Events.Click, function() {
  var link = document.getElementById("guitar");
  link.click()
});
gameButton.on(Events.MouseOver, function() {
  return gameButton.animate({
    properties: {
      scale: 1.2
    },
    curve: 'spring'
  });
});
gameButton.on(Events.MouseOut, function() {
  return gameButton.animate({
    properties: {
      scale: 1
    },
    curve: 'spring'
  });
});
gameButton.on(Events.Click, function() {
  var link = document.getElementById("tetris");
  link.click()
});

blogButton.on(Events.MouseOver, function() {
  return blogButton.animate({
    properties: {
      scale: 1.2
    },
    curve: 'spring'
  });
});
blogButton.on(Events.MouseOut, function() {
  return blogButton.animate({
    properties: {
      scale: 1
    },
    curve: 'spring'
  });
});
blogButton.on(Events.Click, function() {
  var link = document.createElement("a");
  link.setAttribute("href", "http://blog.johnjlee.me/");
  link.click();
});


internetHighlighted.on(Events.MouseOver, function() {
  internetHighlighted.opacity = 1.0;
});
internetHighlighted.on(Events.MouseOut, function() {
  internetHighlighted.opacity = 0.0;
});
emailHighlighted.on(Events.MouseOver, function() {
  emailHighlighted.opacity = 1.0;
});
emailHighlighted.on(Events.MouseOut, function() {
  emailHighlighted.opacity = 0.0;
});
phoneHighlighted.on(Events.MouseOver, function() {
  phoneHighlighted.opacity = 1.0;
});
phoneHighlighted.on(Events.MouseOut, function() {
  phoneHighlighted.opacity = 0.0;
});
twitterHighlighted.on(Events.MouseOver, function() {
  twitterHighlighted.opacity = 1.0;
});
twitterHighlighted.on(Events.MouseOut, function() {
  twitterHighlighted.opacity = 0.0;
});
twitterHighlighted.on(Events.Click, function() {
  var link = document.createElement("a");
  link.setAttribute("href", "https://twitter.com/jjojohjohn");
  link.click();
});
