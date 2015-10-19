var app = angular.module('audo', []);


app.controller('audoCtrl', function($scope) {
  $scope.test = "lol";



});

var lol = "adasdasd";



(function() {
  //helper functions
  var printCb = function(thing) {
    console.log(thing);
  };

  var currentTab = function() {
    chrome.tabs.getSelected(printCb);
  };

  var getAll = function() {
    var allTabs = chrome.tabs.query({}, printCb);
    return allTabs;
  };


  var helloFunction = function(thing) {
    console.log(thing);
  };



  var getActive = function() {
    var activeTab = chrome.tabs.query({
      active: true
    }, printCb);
    console.log(activeTab);
    return activeTab;
  };




  var create = function(url) {
    if (url) {
      url = "http://www." + url + ".com";
      chrome.tabs.create({
        url: url
      }, printCb);
    } else {
      chrome.tabs.create({});
    }

  };

  //goolge functions
  var googleTab = function(query) {
    if (query) {
      url = "http://www.google.com/#q=" + query;
      chrome.tabs.create({
        url: url
      }, printCb);
    } else {
      chrome.tabs.create({
        url: "http://www.google.com"
      }, printCb);
    }
  };

  var googleChoice = function(thing) {
    console.log(thing);
    thing = (Number(thing) - 1).toString();
    var scriptToRun = "document.getElementsByClassName('r')[" + thing + "].children[0].getAttribute('href')";
    chrome.tabs.executeScript(null, {
      code: scriptToRun
    }, function(url) {
      chrome.tabs.create({
        url: url[0]
      }, printCb);
    });

  };





  var changeTab = function(thing) {
    if (!isNaN(Number(thing))) {
      thing = thing - 1;

      chrome.tabs.query({
        index: thing, currentWindow:true
      }, function(tab){
        console.log(tab)
        chrome.tabs.update(tab[0].id, {selected: true});
      });
    }

    // chrome.tabs.query({
    //   currentWindow: true
    // }, function(tabs) {
    //   console.log(tabs)
    //   tabs.forEach(function(tab) {
    //       chrome.tabs.update(null,{ active:true }, printCb);
    //
    //     }
    //   });
    // });
  };

  var closeTab = function(id) {

    chrome.tabs.remove({
      tabIds: 11
    });
  };

  var closeCurrent = function() {



  };

  var closeAllButThis = function() {



  };

  var tryThis = function() {
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function(tab) {
      console.log(tab[0]);
    });
  };



  //view, styling and capture


  var changeFontSize = function(fontSize) {
    if (fontSize === 'bigger') {

    } else if (fontSize === 'smaller') {

    }

  };

  var zoom = function(outorin) {
    var currentZoom;
    var newZoom;
    console.log('called');
    chrome.tabs.getZoom(function(zoomfactor) {
      console.log(zoomfactor);
      currentZoom = zoomfactor;
    });
    if (outorin === 'out') {
      newZoom = (currentZoom * 0.90).toFixed(2);
    } else if (outorin === 'in') {
      newZoom = (currentZoom * 1.10).toFixed(2);
    }

    chrome.tabs.setZoom({
      zoomFactor: newZoom
    });

  };

  var capture = function() {
    chrome.tabs.captureVisibleTab({
      format: "png"
    }, printCb);


  };

  // create tab,  zoom out, zoom in, raise font
  // change font color, close a tab, close other tabs,
  // change tabs url and and by number
  // capture the current tab
  // google anything, then pick which result to load.


  var commands = {
    '(open) (a) new tab': create,
    'open :website': create,
    'hello': changeTab,
    '(can you) google *thing (for me)': googleTab,
    '(give me) (take me to) (open) number :num': googleChoice,
    'go to :num tab': changeTab,
    'zoom :outorin': zoom,
    'close': closeCurrent,
    'make font :size': changeFontSize,
    'close all but this': closeAllButThis,
    'current': '',
    "test :num": changeTab


  };


  annyang.addCommands(commands);
  annyang.start();

})();
