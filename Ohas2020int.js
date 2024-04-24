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
let z = new MutationObserver((mutationsList, observer) => {
  let runningMateSummary = document.querySelector("#running_mate_summary");
  if (runningMateSummary) {
      $("#running_mate_id_button").click();
      observer.disconnect()
  }
});

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#a6a0a0";
            styling.innerHTML = `
#opponent_selection_id_back {
    display: none;
}`
quotes = ["““The people must be brought into the operation of government, to make the laws that affect their lives, and thereby become the fourth check in our government’s system of checks and balances.” -- Mike Gravel", ]
customquote = quotes[Math.floor((Math.random() * quotes.length))]

corrr=`\n<h2>2020</h2><font id='wittyquote' size='2' color='white'><i><em>`+customquote+`</em></i></font>`
            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#6bc6ff";

            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

            $(".container")[0].style.backgroundColor = "#434242";

            document.getElementById("header").src = "https://cdn.discordapp.com/attachments/1149804892538552370/1230356466343346298/image.png?ex=662a7400&is=66292280&hm=ac139c9b7001fbafadd52a79f63b34a99f986b966fde25ce4d9224f7b5f8329e&";

            document.body.background = "https://media.inquirer.com/storage/inquirer/projects/2020/06/george-floyd-timeline/photos/America_Protests_Philadelphia_58037.jpg";

            e.election_json = 
            [{"model":"campaign_trail.election","pk":20,"fields":{"year":2016,"summary":"<div style='overflow-y:scroll;height:200px;'><p> Four years after the election of business mogul Donald Trump, the nation is faced with the usual referendum on the office of the presidency. But this time its different, yes this time the orthodox has become unorthodox as the Covid 19 pandemic continues to rage across the world, mass protests engluf the nations cities over the brazen killing of George Floyd, and to top it all of an economic disaster continues to rage.<br><br>Add to that the numerous scandels that have englufed the Trump presidency, and you have a recipe for a country thats more polerized that it has ever been before. It seams that the whole world has come to a standstill, as the Covid 19 Pandemic continues to take the lives of more and more people both at home, and abroad. Now more than ever, people are looking to their politicians for answers, time will tell if they have them.</p></div>","image_url":"https://image.cnbcfm.com/api/v1/image/106785778-16047770472020-11-07t190408z_1563479244_rc2jyj9hau62_rtrmadp_0_usa-election-reaction.jpeg?v=1604777082&w=929&h=523&vtcrop=y","winning_electoral_vote_number":270,"advisor_url":"","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":1,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":20,"year":2016,"is_premium":0,"display_year":"2020"}];e.credits = "Ohas";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":25,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];
            
            e.candidate_json = 
            [{"model":"campaign_trail.candidate","pk":201,"fields":{"first_name":"Bob","last_name":"Iger","election":20,"party":"Democratic","state":"New York","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><i>The riskiest thing we can do is just maintain the status quo.-Bob Iger</i><br><br>In a surprise upset that not even the best of pundits could predict, Bob Iger, former CEO of Disney, is now Democratic Party's presumptive nominee for president. Running a center left campaign, his success has been attributed to key endorsements from Joe Biden among others. On the flip side, Iger has attracted criticism from senators Warren and Sanders, for the poor working conditions that many at Disney suffer under, and the thought of nominating someone from the “1%”, has disillusioned many within the party, some even have gone as far as to compare Iger to Trump. Iger will have to balance touting his leadership credentials at Disney, with placating the Progressive wing of the party. <br></div></div>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":1,"image_url":"https://www.disneydining.com/wp-content/uploads/2022/04/Bob-Iger-Variety-Cover-Story-5-FULL.webp","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":true}},{"model":"campaign_trail.candidate","pk":200,"fields":{"first_name":"Donald","last_name":"Trump","election":20,"party":"Republican","state":"New York","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#FF0000","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":202,"fields":{"first_name":"Jesse","last_name":"Ventura","election":20,"party":"Green","state":"Minnesota","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":203,"fields":{"first_name":"John","last_name":"Mc Affee","election":20,"party":"Libertarian","state":"Virginia","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}}];e.running_mate_json = [];