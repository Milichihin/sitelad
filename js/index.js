// Create a clone of the menu, right next to original.
$('.header').addClass('original').clone().insertAfter('.header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}  


/* ============================================================================
*/


{
 "query": {
  "count": 1,
  "created": "2018-11-30T14:49:32Z",
  "lang": "ru-RU",
  "results": {
   "channel": {
    "units": {
     "distance": "mi",
     "pressure": "in",
     "speed": "mph",
     "temperature": "F"
    },
    "title": "Yahoo! Weather - Nome, AK, US",
    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
    "description": "Yahoo! Weather for Nome, AK, US",
    "language": "en-us",
    "lastBuildDate": "Fri, 30 Nov 2018 05:49 AM AKST",
    "ttl": "60",
    "location": {
     "city": "Nome",
     "country": "United States",
     "region": " AK"
    },
    "wind": {
     "chill": "10",
     "direction": "90",
     "speed": "33"
    },
    "atmosphere": {
     "humidity": "85",
     "pressure": "996.0",
     "rising": "0",
     "visibility": "16.1"
    },
    "astronomy": {
     "sunrise": "11:22 am",
     "sunset": "4:18 pm"
    },
    "image": {
     "title": "Yahoo! Weather",
     "width": "142",
     "height": "18",
     "link": "http://weather.yahoo.com",
     "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
    },
    "item": {
     "title": "Conditions for Nome, AK, US at 05:00 AM AKST",
     "lat": "64.499474",
     "long": "-165.405792",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
     "pubDate": "Fri, 30 Nov 2018 05:00 AM AKST",
     "condition": {
      "code": "23",
      "date": "Fri, 30 Nov 2018 05:00 AM AKST",
      "temp": "25",
      "text": "Breezy"
     },
     "forecast": [
      {
       "code": "15",
       "date": "30 Nov 2018",
       "day": "Fri",
       "high": "27",
       "low": "24",
       "text": "Blowing Snow"
      },
      {
       "code": "15",
       "date": "01 Dec 2018",
       "day": "Sat",
       "high": "34",
       "low": "29",
       "text": "Blowing Snow"
      },
      {
       "code": "26",
       "date": "02 Dec 2018",
       "day": "Sun",
       "high": "34",
       "low": "28",
       "text": "Cloudy"
      },
      {
       "code": "28",
       "date": "03 Dec 2018",
       "day": "Mon",
       "high": "31",
       "low": "27",
       "text": "Mostly Cloudy"
      },
      {
       "code": "23",
       "date": "04 Dec 2018",
       "day": "Tue",
       "high": "29",
       "low": "26",
       "text": "Breezy"
      },
      {
       "code": "26",
       "date": "05 Dec 2018",
       "day": "Wed",
       "high": "31",
       "low": "29",
       "text": "Cloudy"
      },
      {
       "code": "26",
       "date": "06 Dec 2018",
       "day": "Thu",
       "high": "32",
       "low": "29",
       "text": "Cloudy"
      },
      {
       "code": "28",
       "date": "07 Dec 2018",
       "day": "Fri",
       "high": "31",
       "low": "29",
       "text": "Mostly Cloudy"
      },
      {
       "code": "30",
       "date": "08 Dec 2018",
       "day": "Sat",
       "high": "29",
       "low": "17",
       "text": "Partly Cloudy"
      },
      {
       "code": "32",
       "date": "09 Dec 2018",
       "day": "Sun",
       "high": "16",
       "low": "3",
       "text": "Sunny"
      }
     ],
     "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/23.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Breezy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Fri - Blowing Snow. High: 27Low: 24\n<BR /> Sat - Blowing Snow. High: 34Low: 29\n<BR /> Sun - Cloudy. High: 34Low: 28\n<BR /> Mon - Mostly Cloudy. High: 31Low: 27\n<BR /> Tue - Breezy. High: 29Low: 26\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
     "guid": {
      "isPermaLink": "false"
     }
    }
   }
  }
 }
}