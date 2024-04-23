// 1972 FIRING LINE CODE 1
styling = document.createElement("style");
document.head.appendChild(styling);
campaignTrail_temp.credits = "<button onclick='funcredits()'>Mod1Team</button>";

  funcredits = function() {
    credits = ["Lead Writer, Graphics, Music:", "Ohas", "", "Coding, Additional Writing:",  "Ohas", "", "Ohas", "", "Playtesting:", "Rickroll999, rnmgaming5068, TPLeo, Tomahawk2k, Leon Trotsky, Pompf, Ivorycore, Anne H, Jackalopemaster, EUIV ETS2", "","#1 Achievement Hunter", "Onkel Danny", "", "Music Player adapted from 2000N", "Advisor Mode inspired by Sea to Shining Sea", ""]
    text = "CREDITS:\n\n"
    for (i in credits) {
        text += credits[i] + "\n"
    }
    alert(text)
  }
e = campaignTrail_temp; 
 nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#200809";
 nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#834c4c";
 $(".container")[0].style.backgroundColor = "#000000";
 $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;
 document.body.background = "https://i.imgur.com/N4EJcpK.png"
 document.getElementById("header").src = "https://i.imgur.com/vpYW3Vk.png";
styling.innerHTML = `
#opponent_selection_id_back {
    display: none;
}`
quotes = ["““The people must be brought into the operation of government, to make the laws that affect their lives, and thereby become the fourth check in our government’s system of checks and balances.” -- Mike Gravel", ]
customquote = quotes[Math.floor((Math.random() * quotes.length))]

corrr=`\n<h2>1972 OFTL</h2><font id='wittyquote' size='2' color='white'><i><em>`+customquote+`</em></i></font>`

let z = new MutationObserver((mutationsList, observer) => {
    let runningMateSummary = document.querySelector("#running_mate_summary");
    if (runningMateSummary) {
        $("#running_mate_id_button").click();
        observer.disconnect()
    }
});


z.observe(document, { subtree: true, childList: true });
e=campaignTrail_temp

e.election_json = [
	{
		"model": "campaign_trail.election",
		"pk": 9,
		"fields": {
			"year": 1972,
			"summary": "<p> Four years after the election of bussiness mogel Donald Trump, the nation is faced with the usual referedum on the office of the presidency. But this time its different, yes this time the orthodox has become unorthodx as the Covid 19 pandemic continues to rage across the world, mass protets engluf the nations cities over the brazen killing of George Flyod, and to top it all of an economic disaster. </p>",
			"image_url": "https://i.imgur.com/sPbFKjZ.png",
			"winning_electoral_vote_number": 270,
			"advisor_url": "https://images-ext-2.discordapp.net/external/SpVmnQiYu2w4Tmn55DDAkR7o9fylOcKSGXTPoKgC3Mk/https/files.catbox.moe/wmdtme.png?width=1732&height=1066",
			"recommended_reading": "",
			"has_visits": 1,
			"no_electoral_majority_image": "/static/images/2012-no-majority.jpg"
		}
	}
]

e.candidate_json = [
	{
		"model": "campaign_trail.candidate",
		"pk": 77,
		"fields": {
			"first_name": "Curtis Emerson",
			"last_name": "LeMay",
			"election": 9,
			"party": "American Independent Party",
			"state": "California",
			"priority": 1,
			"description": "Curtis LeMay was never supposed to become President. Hell, he was never supposed to be Vice-President either,but the universe seemingly had other plans for the Big Cigar.<br><br>LeMay's tenure in the Oval Office has not been one marked by success. Any attempt at domestic agenda has been stalled by a hostile congress, one which threatens impeachment at any opportunity. At the same time, Congress debates reform to the electoral college, spurred on thanks to Wallace's deadlock and victory just years earlier. To top it all off the Vietnam war rages, with American casualties on the rise and a radicalized anti-war movement that threatens to upend American society just like in 1968.<br><br>Lemay now sits in the Oval Office, his approval rating almost as low as that of his predecessor,but he cannot give up, not now, lest the peaceniks sabotage all that he's worked for.",
			"color_hex": "#FF0000",
			"secondary_color_hex": "#FFA0A0",
			"is_active": 1,
			"image_url": "https://files.catbox.moe/23o533.png",
			"electoral_victory_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
			"electoral_loss_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
			"no_electoral_majority_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
			"description_as_running_mate": "''",
			"candidate_score": 1.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 78,
		"fields": {
			"first_name": "Al",
			"last_name": "Shiver",
			"election": 9,
			"party": "Democrat",
			"state": "Tennessee",
			"priority": 2,
			"description": "",
			"color_hex": "#0000FF",
			"secondary_color_hex": "#90C0FF",
			"is_active": 0,
			"image_url": "/static/images/al-gore-2000.jpg",
			"electoral_victory_message": "",
			"electoral_loss_message": "",
			"no_electoral_majority_message": "",
			"description_as_running_mate": "''",
			"candidate_score": 1.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 79,
		"fields": {
			"first_name": "Ralph",
			"last_name": "Percy",
			"election": 9,
			"party": "Green",
			"state": "Connecticut",
			"priority": 3,
			"description": "",
			"color_hex": "#00C100",
			"secondary_color_hex": "#A1FFA1",
			"is_active": 0,
			"image_url": "/static/images/ralph-nader-2000.jpg",
			"electoral_victory_message": "",
			"electoral_loss_message": "",
			"no_electoral_majority_message": "",
			"description_as_running_mate": "''",
			"candidate_score": 1.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 80,
		"fields": {
			"first_name": "Pat",
			"last_name": "\"Bucky\" Buchanan Barnes",
			"election": 9,
			"party": "Reform",
			"state": "Virginia",
			"priority": 4,
			"description": "''",
			"color_hex": "#FFFF00",
			"secondary_color_hex": "#FFFFC0",
			"is_active": 0,
			"image_url": "''",
			"electoral_victory_message": "''",
			"electoral_loss_message": "''",
			"no_electoral_majority_message": "''",
			"description_as_running_mate": "''",
			"candidate_score": 1.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 83,
		"fields": {
			"first_name": "Gerald",
			"last_name": "Ford",
			"election": 9,
			"party": "Republican",
			"state": "Michigan",
			"priority": 7,
			"description": "''",
			"color_hex": "#FF0000",
			"secondary_color_hex": "#FFA0A0",
			"is_active": 0,
			"image_url": "https://i.imgur.com/9hqWAka.jpg",
			"electoral_victory_message": "''",
			"electoral_loss_message": "''",
			"no_electoral_majority_message": "''",
			"description_as_running_mate": "After hours of vetting, the realization has finally settled in, there's only one person who LeMay could select that Congress would approve.<br>Gerald R. Ford.<br/><br/>A long-time representative and the current House Minority Leader, Ford would likely have little trouble beingaccepted by Congress, and could at the very least temper the burning rage that the legislative branch feels towards you. His relationship with the Republican leadership and his good standing in the party in general could be useful in courting key votes on bills. On the issues of the day, Ford sits in the middle of Republican thought, though he has privately expressed dissatisfaction with the ongoing war in Vietnam He isn't perfect, but he's all the bastards in Congress can stomach.",
			"candidate_score": 0.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 85,
		"fields": {
			"first_name": "Joe",
			"last_name": "Lieberman",
			"election": 9,
			"party": "Democrat",
			"state": "Connecticut",
			"priority": 9,
			"description": "''",
			"color_hex": "#0000FF",
			"secondary_color_hex": "#90C0FF",
			"is_active": 0,
			"image_url": "/static/images/joe-lieberman-2000.jpg",
			"electoral_victory_message": "''",
			"electoral_loss_message": "''",
			"no_electoral_majority_message": "''",
			"description_as_running_mate": "",
			"candidate_score": 0.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 86,
		"fields": {
			"first_name": "Bob",
			"last_name": "Graham",
			"election": 9,
			"party": "Democrat",
			"state": "Florida",
			"priority": 10,
			"description": "''",
			"color_hex": "#0000FF",
			"secondary_color_hex": "#90C0FF",
			"is_active": 0,
			"image_url": "/static/images/bob-graham-2000.jpg",
			"electoral_victory_message": "''",
			"electoral_loss_message": "''",
			"no_electoral_majority_message": "''",
			"description_as_running_mate": "good",
			"candidate_score": 0.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 87,
		"fields": {
			"first_name": "John",
			"last_name": "Kerry",
			"election": 9,
			"party": "Democrat",
			"state": "Massachusetts",
			"priority": 11,
			"description": "''",
			"color_hex": "#0000FF",
			"secondary_color_hex": "#90C0FF",
			"is_active": 0,
			"image_url": "/static/images/john-kerry-2000.jpg",
			"electoral_victory_message": "''",
			"electoral_loss_message": "''",
			"no_electoral_majority_message": "''",
			"description_as_running_mate": "good",
			"candidate_score": 0.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 88,
		"fields": {
			"first_name": "Evan",
			"last_name": "Bayh",
			"election": 9,
			"party": "Democrat",
			"state": "Indiana",
			"priority": 12,
			"description": "''",
			"color_hex": "#0000FF",
			"secondary_color_hex": "#90C0FF",
			"is_active": 0,
			"image_url": "/static/images/evan-bayh-2000.jpg",
			"electoral_victory_message": "''",
			"electoral_loss_message": "''",
			"no_electoral_majority_message": "''",
			"description_as_running_mate": "good",
			"candidate_score": 0.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 89,
		"fields": {
			"first_name": "Winona",
			"last_name": "LaDuke",
			"election": 9,
			"party": "Green",
			"state": "Minnesota",
			"priority": 13,
			"description": "''",
			"color_hex": "#00C100",
			"secondary_color_hex": "#A1FFA1",
			"is_active": 0,
			"image_url": "/static/images/winona-laduke-2000.jpg",
			"electoral_victory_message": "''",
			"electoral_loss_message": "''",
			"no_electoral_majority_message": "''",
			"description_as_running_mate": "good",
			"candidate_score": 0.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 90,
		"fields": {
			"first_name": "Ezola",
			"last_name": "Foster",
			"election": 9,
			"party": "Reform",
			"state": "California",
			"priority": 14,
			"description": "''",
			"color_hex": "#FFFF00",
			"secondary_color_hex": "#FFFFC0",
			"is_active": 0,
			"image_url": "''",
			"electoral_victory_message": "''",
			"electoral_loss_message": "''",
			"no_electoral_majority_message": "''",
			"description_as_running_mate": "''",
			"candidate_score": 0.0
		}
	}
]

e.running_mate_json = [
	{
		"model": "campaign_trail.running_mate",
		"pk": 56,
		"fields": {
			"candidate": 79,
			"running_mate": 89
		}
	},
	{
		"model": "campaign_trail.running_mate",
		"pk": 57,
		"fields": {
			"candidate": 80,
			"running_mate": 90
		}
	},
	{
		"model": "campaign_trail.running_mate",
		"pk": 52,
		"fields": {
			"candidate": 78,
			"running_mate": 85
		}
	},
	{
		"model": "campaign_trail.running_mate",
		"pk": 53,
		"fields": {
			"candidate": 78,
			"running_mate": 86
		}
	},
	{
		"model": "campaign_trail.running_mate",
		"pk": 55,
		"fields": {
			"candidate": 78,
			"running_mate": 88
		}
	},
	{
		"model": "campaign_trail.running_mate",
		"pk": 54,
		"fields": {
			"candidate": 78,
			"running_mate": 87
		}
	},
	{
		"model": "campaign_trail.running_mate",
		"pk": 50,
		"fields": {
			"candidate": 77,
			"running_mate": 83
		}
	},
]

e.opponents_default_json = [
    {
        "election": 9,
        "candidates": [
			77,
			78,
			79,
			80
        ]
    }
]

e.opponents_weighted_json = [
    {
        "election": 9,
        "candidates": [
			77,
			78,
			79,
			80
        ]
    }
]

e.difficulty_level_json = [
	{
		"model": "campaign_trail.difficulty_level",
		"pk": 1,
		"fields": {
			"name": "Easy",
			"multiplier": 1.1
		}
	},
	{
		"model": "campaign_trail.difficulty_level",
		"pk": 3,
		"fields": {
			"name": "Normal",
			"multiplier": 0.97
		}
	},
	{
		"model": "campaign_trail.difficulty_level",
		"pk": 4,
		"fields": {
			"name": "Hard",
			"multiplier": 0.95
		}
	},
	{
		"model": "campaign_trail.difficulty_level",
		"pk": 5,
		"fields": {
			"name": "Impossible",
			"multiplier": 0.9
		}
	}
]

e.global_parameter_json = [
	{
		"model": "campaign_trail.global_parameter",
		"pk": 1,
		"fields": {
			"vote_variable": 1.125,
			"max_swing": 0.12,
			"start_point": 0.94,
			"candidate_issue_weight": 10.0,
			"running_mate_issue_weight": 3.0,
			"issue_stance_1_max": -0.71,
			"issue_stance_2_max": -0.3,
			"issue_stance_3_max": -0.125,
			"issue_stance_4_max": 0.125,
			"issue_stance_5_max": 0.3,
			"issue_stance_6_max": 0.71,
			"global_variance": 0.01,
			"state_variance": 0.005,
			"question_count": 25,
			"default_map_color_hex": "#C9C9C9",
			"no_state_map_color_hex": "#999999"
		}
	}
]

e.candidate_dropout_json = [{"model": "campaign_trail.candidate_dropout", "pk": 1, "fields": {"candidate": 36, "affected_candidate": 18, "probability": 1.0}}]
e.temp_election_list = [{"id": 9, "year": 1972, "is_premium": 0, "display_year": "1972 Firing Line"}];
e.show_premium = true;
e.premier_ab_test_version = -1;

// Initialise custom music

$("#music_player")[0].children[0].style.display="none"
$("#music_player")[0].children[1].style.display="none"

document.getElementById("modLoadReveal").style.display="none"
document.getElementById("modloaddiv").style.display="none"

musicBox = document.getElementById("music_player")
musicBox.style.display=""

var trackSel;
e = campaignTrail_temp
e.selectedSoundtrack = 0

toTime = (seconds) => {
  var date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

generateTime = () => {
    // Get the audio element
    var audio = document.getElementById("campaigntrailmusic");

    timeTracker = document.createElement("div");
    timeTracker.style = `
      text-align:left;
      border-style:solid;
      border-width:3px;
      height:150px;
      width:200px;
      background-color:#999999;
      float:right;
      padding: 10px;
    `
    $("#trackSelParent")[0].prepend(timeTracker);
    $("#trackSelParent")[0].prepend(document.createElement("br"));

    // Create a new element to display the current position of the audio
    var positionDisplay = document.createElement("gg");
    positionDisplay.id = "position-display";

    // Create a new slider element to change the time
    var timeSlider = document.createElement("input");
    timeSlider.type = "range";
    timeSlider.min = 0;
    timeSlider.max = 1;
    timeSlider.step = 0.001;
    timeSlider.value = 0;
    timeSlider.style.width = "200px";
    timeSlider.id = "time-slider";

    var pausePlay = document.createElement("button");
    pausePlay.id = "position-display";
    pausePlay.innerHTML = "<b>Pause</b>"
    pausePlay.style.width = "100%";


    pausePlay.addEventListener("click", event => {
      event.preventDefault();
      updatePositionDisplay();
      let audio = document.getElementById("campaigntrailmusic");
      if (audio.paused) {
        audio.play();
        event.target.innerHTML = "<b>Pause</b>";
        return;
      }
      audio.pause();
      event.target.innerHTML = "<b>Play</b>";
      return;
    })

    var volumeLabel = document.createElement("gg");
    volumeLabel.id = "volume-label";
    volumeLabel.innerHTML = "<br><b>Volume: </b>"

    var volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = 0;
    volumeSlider.max = 1;
    volumeSlider.step = 0.001;
    volumeSlider.value = 0;
    volumeSlider.style.width = "200px";
    volumeSlider.id = "volume-slider";

    volumeSlider.value = audio.volume;

    timeTracker.appendChild(pausePlay);
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(positionDisplay);
    timeTracker.appendChild(timeSlider);
    timeTracker.appendChild(volumeLabel);
    timeTracker.appendChild(volumeSlider);

    updatePositionDisplay();

    //for (let i = 0; i < 10; i++)
    //timeTracker.append(document.createElement("br"));


    // Function to update the position display
    function updatePositionDisplay() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
    }

    // Function to change the time of the audio
    function changeTime() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      audio.currentTime = timeSlider.value * audio.duration;
    }

    updateVolume = event => {
      audio.volume = event.target.value;
    }
    
    // Update the position display and slider every second
    setInterval(updatePositionDisplay, 1000);

    // Listen for changes to the time slider and change the time of the audio
    timeSlider.addEventListener("input", changeTime);
    volumeSlider.addEventListener("input", updateVolume)
}

function newMusicPlayer() {
  trackSel = document.createElement("div");
  trackSel.id = "trackSelParent"
  let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#999999;float:right;">`
  z += `<b><select id='selectSoundtrack'><option value='`+soundtracks[e.selectedSoundtrack].name+`'>`+soundtracks[e.selectedSoundtrack].name+"</option>"
  for (i in soundtracks) {
    if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
      z += `<option value='`+soundtracks[i].name+`'>`+soundtracks[i].name+`</option>`
    }
  }
  z += `</select></b><br><br>`
  // <label><input type="radio" name="option" value="option1">Option 1</label><br>
  for (i in soundtracks[e.selectedSoundtrack].tracklist) {
    let a = soundtracks[e.selectedSoundtrack].tracklist[i]
    let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="`+i+`">`+a.name+`</label><br>`
    z += b
  }
  z += "</div><br><br>"
  trackSel.innerHTML = z

  // select correct song

  musicBox.appendChild(trackSel);
  Array.from(document.getElementById("trackSel").children).filter(f=>{
    return f.tagName == "LABEL"
  }).map(f=>f.children[0])[0].checked = true

  // set soundtrack changer

  soundtrackSelector = document.getElementById("selectSoundtrack")
  soundtrackSelector.onchange = function() {
    for (i in soundtracks) {
      if (soundtracks[i].name == soundtrackSelector.value) {
        e.selectedSoundtrack = i
        break
      }
    }
    document.getElementById("trackSelParent").remove()
    newMusicPlayer()
  }

  var matches = document.querySelectorAll('.trackSelector');

  for (match in matches) {
    matches[match].onchange = function() {
      audio = $("#campaigntrailmusic")[0];
      audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
      audio.currentTime = 0
    }
  }

  musicBox.children[2].loop = false
  musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url

  musicBox.children[2].onended = function() {
    console.log("next track")
    let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
    let newSel = clamp(selected+1, soundtracks[e.selectedSoundtrack].tracklist.length-1, 0)
    let buttons = Array.from(document.getElementById("trackSel").children).filter(f=>{
      return f.tagName == "LABEL"
    }).map(f=>f.children[0])
    //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
    buttons[newSel].click()
  }

  for (w = 0; w < 7; w++) {
    document.getElementById("trackSelParent").appendChild(document.createElement("br"))
  }
  
  generateTime();
}

clamp = function(a, max, min, overflow=true) {
  if (overflow) {
    return a > max ? min : a < min ? max : a;
  }
  return a > max ? max : a < min ? min : a;
}


// Track list

var soundtracks = {
  0: {
    name: "Everywhere at the End of Time",
    tracklist: [
      {
        "name": "Burning Bridges",
        "url": "https://cdn.discordapp.com/attachments/1194028168529592410/1194379724508627056/y2mate.is_-_Mike_Curb_Congregation_Burning_Bridges_with_lyrics_-qXIjE_gDw94-128k-1704832669.mp3?ex=65b023cc&is=659daecc&hm=629a0cb8eb5ac452af2f47bc631fc52ff084474273495cf679f1dc8efb119d87&"
      },
      {
        "name": "For What Its Worth",
        "url": "https://cdn.discordapp.com/attachments/1194028168529592410/1194380319789432882/y2mate.is_-_Buffalo_Springfield_For_What_It_s_Worth_Official_Audio_-80_39eAx3z8-128k-1704832828.mp3?ex=65b0245a&is=659daf5a&hm=d610b18024e310b3b18ee71c91f800febd758141193928a102bce8165f7036b5&"
      },
      {
        "name": "Sink the Bismark",
        "url": "https://cdn.discordapp.com/attachments/1194028168529592410/1194380640775323648/y2mate.is_-_sink_the_bismarck___johnny_horton-M1Ufc2hI4FM-128k-1704832915.mp3?ex=65b024a7&is=659dafa7&hm=e403deb7d98974d4b47084c66ee2f2dc60369e465e55a8cd546817cd38092a77&"
      },
      {
        "name": "Folsom Prison Blues",
        "url": "https://cdn.discordapp.com/attachments/1194028168529592410/1194381031608963172/y2mate.is_-_Johnny_Cash_Folsom_Prison_Blues_Official_Audio_-AeZRYhLDLeU-128k-1704832993.mp3?ex=65b02504&is=659db004&hm=5508f352bc74a942faa8aacb670451c258d0748993160bdbb322268fbc76b5ba&"
      },
      {
        "name": "Swinging on a Star",
        "url": "https://cdn.discordapp.com/attachments/1194028168529592410/1194381485747228834/y2mate.is_-_Bing_Crosby_Swinging_on_a_star-rATftJiWdkw-128k-1704833116.mp3?ex=65b02570&is=659db070&hm=fbb30e7b0d2e53109e1d244165a1def0d523a2c1d51ab340ca7fdda3c4a07463&"
      },
   ]
   }	  
}

// Set up new music player

newMusicPlayer()








