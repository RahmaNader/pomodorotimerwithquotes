let btnquote = document.getElementById('btnquote');
let output = document.getElementById('output');
let quotes = [
    '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”',
    '“Don’t Let Yesterday Take Up Too Much Of Today.”',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” ',
    '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”',
    '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”',
    '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”',
    '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.”',
    '“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.”',
    '“We May Encounter Many Defeats But We Must Not Be Defeated.”',
    '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.”',
];

let outputauth = document.getElementById('outputauth');
let quotesauth = [
    '– Winston Churchill',
    '– Will Rogers',
    '– Unknown',
    '– Inspirational Quote By Vince Lombardi',
    '– Steve Jobs',
    '– Rob Siltanen',
    '– Og Mandino',
    '– Mohnish Pabrai',
    '– Maya Angelou',
    '– Johann Wolfgang Von Goethe',
];

btnquote.addEventListener('click', function() {
    var num = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[num]
    var randomQuoteauth = quotesauth[num]
    output.innerHTML = randomQuote;
    outputauth.innerHTML = randomQuoteauth;
    console.log(randomQuote);
})