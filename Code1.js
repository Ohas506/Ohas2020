// Ohas 2020 CODE 1
styling = document.createElement("style");
document.head.appendChild(styling);
campaignTrail_temp.credits = "<button onclick='funcredits()'>Ohas</button>";

  funcredits = function() {
    credits = ["Lead Writer, Graphics, Music:", "Ohas", "", "Coding, Additional Writing:",  "Ohas", "", "Ohas", "", "Playtesting:", "Rickroll999, rnmgaming5068, TPLeo, Tomahawk2k, Leon Trotsky, Pompf, Ivorycore, Anne H, Jackalopemaster, EUIV ETS2", "","#1 Achievement Hunter", "Onkel Danny", "", "Music Player adapted from 2000N", "Advisor Mode inspired by Sea to Shining Sea", ""]
    text = "CREDITS:\n\n"
    for (i in credits) {
        text += credits[i] + "\n"
    }
    alert(text)
  }
e = campaignTrail_temp; 
 nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#808080";
 nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#834c4c";
 $(".container")[0].style.backgroundColor = "#ADD8E6";
 $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;
 document.body.background = "https://media.inquirer.com/storage/inquirer/projects/2020/06/george-floyd-timeline/photos/America_Protests_Philadelphia_58037.jpg"
 document.getElementById("header").src = "https://cdn.discordapp.com/attachments/1149804892538552370/1230356466343346298/image.png?ex=66292280&is=6627d100&hm=8e417adda3df95e534e2b5d61110d66e2899653dac267676fd23588d47d61092&";
styling.innerHTML = `
#opponent_selection_id_back {
    display: none;
}`
quotes = ["““The people must be brought into the operation of government, to make the laws that affect their lives, and thereby become the fourth check in our government’s system of checks and balances.” -- Mike Gravel", ]
customquote = quotes[Math.floor((Math.random() * quotes.length))]

corrr=`\n<h2>2020</h2><font id='wittyquote' size='2' color='white'><i><em>`+customquote+`</em></i></font>`

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
		"pk": 20,
		"fields": {
			"year": 2020,
			"summary": "<p> Four years after the election of bussiness mogel Donald Trump, the nation is faced with the usual referedum on the office of the presidency. But this time its different, yes this time the orthodox has become unorthodx as the Covid 19 pandemic continues to rage across the world, mass protests engluf the nations cities over the brazen killing of George Floyd, and to top it all of an economic disaster continues to rage.<br><br>Add to that the numerous scandels that have englufed the Trump presidency, and you have a recipe for a country thats more polerized that it has ever been before. It seams that the whole world has come to a standstill, as the Covid 19 Pademic continues to take the lives of more and more people both at home, and abroad. Now more than ever, people are looking to their politicians for awnsers, time will tell if they have them.</p>",
			"image_url": "https://image.cnbcfm.com/api/v1/image/106785778-16047770472020-11-07t190408z_1563479244_rc2jyj9hau62_rtrmadp_0_usa-election-reaction.jpeg?v=1604777082&w=929&h=523&vtcrop=y",
			"winning_electoral_vote_number": 270,
			"advisor_url": "https://scdp.org/wp-content/uploads/2021/02/dems2.png",
			"recommended_reading": "",
			"has_visits": 1,
			"no_electoral_majority_image": "https://www.uscp.gov/sites/evo-subsites/www.uscp.gov/files/styles/evo_featured_image/public/wysiwyg_uploaded/Box%204%20-%20Visit%20the%20Capitol.png?h=48266b06&itok=4w0e0yTj"
		}
	}
]

e.candidate_json = [
	{
		"model": "campaign_trail.candidate",
		"pk": 300,
		"fields": {
			"first_name": "Bob",
			"last_name": "Iger",
			"election": 9,
			"party": "Democratic Party",
			"state": "New York",
			"priority": 1,
			"description": "<i>The riskiest thing we can do is just maintain the status quo.-Bob Iger</i><br><br>In a surprise upset that not even the best of pundits could predict, Bob Iger, former CEO of Disney, is now the Democratic Party's presumptive nominee for president. Running a center left campaign, his success has been attributed to key endorsements from Joe Biden among others. On the flip side, Iger has attracted criticism from senators Warren and Sanders, for the poor working conditions that many at Disney, and the thought of nominating someone from the “1%”, has disillusioned many within the party, some even have gone as far as to compare Iger to Trump. Iger will have to balance touting his leadership credentials at Disney, with placating the Progressive wing of the party.",
			"color_hex": "#0000ff",
			"secondary_color_hex": "#FFA0A0",
			"is_active": 1,
			"image_url": "https://www.disneydining.com/wp-content/uploads/2022/04/Bob-Iger-Variety-Cover-Story-5-FULL.webp",
			"electoral_victory_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
			"electoral_loss_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
			"no_electoral_majority_message": "<h3>the ending codes broke</h3><p>sorry uwu</p>",
			"description_as_running_mate": "''",
			"candidate_score": 1.0
		}
	},
	{
		"model": "campaign_trail.candidate",
		"pk": 301,
		"fields": {
			"first_name": "Donald",
			"last_name": "Trump",
			"election": 9,
			"party": "Republican",
			"state": "New York",
			"priority": 2,
			"description": "",
			"color_hex": "#FF0000",
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
		"pk": 302,
		"fields": {
			"first_name": "Jesse",
			"last_name": "Ventura",
			"election": 9,
			"party": "Green",
			"state": "New York",
			"priority": 3,
			"description": "",
			"color_hex": "#00FF00",
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
		"pk": 303,
		"fields": {
			"first_name": "John",
			"last_name": "Mc Afee",
			"election": 9,
			"party": "Libertarian",
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
e.temp_election_list = [{"id": 9, "year": 1972, "is_premium": 0, "display_year": "2020"}];
e.show_premium = true;
e.premier_ab_test_version = -1;

// Initialise custom music

