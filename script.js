$(function () {
  // Grab the template script
  var theTemplateScript = $("#article-template").html();

  // Compile the template
  var template = Handlebars.compile(theTemplateScript);

  // Define our data object
  var articleTemplate={

    article: {
    "title": "Demo: This Is A Sample Article",
    "byline": "This is an article byline.",
    "author": "Alia ElKattan",
    "body": "I opened social media for a quick check before I continue studying for my final exams only to find, rather than celebrity news and more selfies, bright red profile pictures and the hashtag #AleppoIsBurning all over my newsfeed. I kept scrolling, watching videos from the city, seeing pictures of kids with blood splattered all over their faces, and old men screaming of despair, and I could not stop the tears. The conflict in Syria has been ongoing for over five years, and it has only worsened as the time passed. To make it even more brutal, we’ve seen innocent people attempting to flee this brutality in search for a secure life be ridiculed, blamed, and misused as cheap tools for political rhetoric by politicians (and others), drowning in their privilege as Syria drowns in innocents’ blood.\
    <br><br> While the news of death and destruction becomes less surprising for us, and as the numbers escalate into overwhelming statistics, it becomes a little easier for us to scroll past that graphic picture or tragic news. We get lost in the busyness of our own lives, and it seems like with every dead person, we become just a little more immune to the news. To the people in Syria, however, every injury and death is just as tragic and heartbreaking as the one before. The mother who just lost her kid to an airstrike is not used to the pain. The family who have lost a husband and a father who died saving lives have suffered a loss more heartbreaking than words can express. I have to keep reminding myself of that, and whether in Syria or someplace else, with every piece of tragic news, I try to remind myself that I should not become used to it; I cannot see it as the new norm. I cannot let my sense of empathy die, and I cannot let go of my humanity.\
    <br> <br>  Okay, so we feel for these people, we try to understand their struggle, we empathize with them, but then what? Well, that’s the worst part… I don’t know. I leave my Economics textbook and sit thinking, surely there is something I can do… but what? I see people on Facebook shame ‘the world’ for leaving Syria to die under destruction, but who exactly are we expecting to help, and how? Among the many posts raising awareness regarding what’s happening in Aleppo, I also see posts by people ridiculing the fact that all we can do is change our profile pictures and post Facebook statuses. Yes, at times it seems like that is all I can do, and it truly hurts to feel this helpless. So, is it wrong? If my new profile picture will not save a life or comfort a refugee kid, should I have not put it? No, because even if that is all we can do, we will do it. We might feel like we want to convince Assad to stop the airstrikes, go work for the hospitals in Aleppo, or dismantle the weapons used to kill people there, but at this moment, we can’t. What we can do, however, is remember the people of Aleppo, and all other suffering cities, in our every prayer. We can remind people of their struggle and keep the memory of the victims alive. \
    <br> <br> We might not feel like our really small actions make a real difference, but that’s no excuse to be silent. Change your profile picture, write a status in solidarity, raise awareness, help out a refugee, pray for Syria, do whatever you can, but do not turn your back on a suffering population. Meanwhile, make sure you are also working for the long term goals. Are you not satisfied with how the people in power are dealing with the current crises of the world? Well, we’re up next. Better be ready."
},

  };

  // Pass our data to the template
  var compiledhtml = template(articleTemplate);

  // Add the compiled html to the page
  $('.article-placeholder').html(compiledhtml);
});
