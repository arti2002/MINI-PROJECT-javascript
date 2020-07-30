var quote = ['Live as if you were to die tomorrow. Learn as if you were to live forever.  :Mahatma Gandhi',
    'That which does not kill us makes us stronger. :Friedrich Nietzsche',
    'Do what you can, with what you have, where you are. :Theodore Roosevelt',
    'If you cannot do great things, do small things in a great way. :Napoleon Hill',
    'The best way to predict the future is to invent it. :Alan Kay',
    'You only live once, but if you do it right, once is enough. :Mae Wes',
    'Always forgive your enemies,nothing annoys them so much. :Oscar Wilde',
    'If you want to test your memory, try to recall what you were worrying about one year ago today. :E. Joseph Cossman',
    'You cannot go back and change the beginning, but you can start where you are and change the ending. :C. S. Lewis',
    'Life is not a problem to be solved, but a reality to be experienced. :Søren Kierkegaard',
    `We May Encounter Many Defeats But We Must Not Be Defeated. :Maya Angelou`,
    `Creativity Is Intelligence Having Fun. :Albert Einstein`,
    `Do What You Can With All You Have, Wherever You Are. :Theodore Roosevelt`,
    `You Are Never Too Old To Set Another Goal Or To Dream A New Dream. :C.S. Lewis`
]

function newq() {
    var no = Math.floor(Math.random() * (quote.length));
    document.getElementById('display').innerHTML = quote[no];
}