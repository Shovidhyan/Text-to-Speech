// Sign language videos mapping
const signVideos = {
    "all": "./assets/All.mp4",
    "after": "./assets/After.mp4",
    "again": "./assets/Again.mp4",
    "age": "./assets/Age.mp4",
    "against": "./assets/Against.mp4",
    "alone": "./assets/Alone.mp4",
    "also": "./assets/Also.mp4",
    "and": "./assets/And.mp4",
    "ask": "./assets/Ask.mp4",
    "at": "./assets/At.mp4",
    "be": "./assets/Be.mp4",
    "beautiful": "./assets/Beautiful.mp4",
    "before": "./assets/Before.mp4",
    "best": "./assets/Best.mp4",
    "better": "./assets/Better.mp4",
    "busy": "./assets/Busy.mp4",
    "but": "./assets/But.mp4",
    "bye": "./assets/Bye.mp4",
    "can": "./assets/Can.mp4",
    "cannot": "./assets/Cannot.mp4",
    "change": "./assets/Change.mp4",
    "college": "./assets/College.mp4",
    "come": "./assets/Come.mp4",
    "computer": "./assets/Computer.mp4",
    "day": "./assets/Day.mp4",
    "distance": "./assets/Distance.mp4",
    "do not": "./assets/Do Not.mp4",
    "do": "./assets/Do.mp4",
    "does not": "./assets/Does Not.mp4",
    "eat": "./assets/Eat.mp4",
    "engineer": "./assets/Engineer.mp4",
    "fight": "./assets/Fight.mp4",
    "from": "./assets/From.mp4",
    "finish": "./assets/Finish.mp4",
    "glitter": "./assets/Glitter.mp4",
    "go": "./assets/Go.mp4",
    "god": "./assets/God.mp4",
    "gold": "./assets/gold.mp4",
    "good": "./assets/Good.mp4",
    "great": "./assets/Great.mp4",
    "hand": "./assets/Hand.mp4",
    "hands": "./assets/Hands.mp4",
    "happy": "./assets/Happy.mp4",
    "hello": "./assets/Hello.mp4",
    "help": "./assets/Help.mp4",
    "her": "./assets/Her.mp4",
    "here": "./assets/Here.mp4",
    "his": "./assets/His.mp4",
    "home": "./assets/Home.mp4",
    "homepage": "./assets/Homepage.mp4",
    "how": "./assets/How.mp4",
    "invent": "./assets/Invent.mp4",
    "it": "./assets/It.mp4",
    "j": "./assets/J.mp4",
    "k": "./assets/k.mp4",
    "keep": "./assets/Keep.mp4",
    "l": "./assets/L.mp4",
    "languages": "./assets/Language.mp4",
    "laugh": "./assets/Laugh.mp4",
    "learn": "./assets/Learn.mp4",
    "me": "./assets/ME.mp4",
    "more": "./assets/More.mp4",
    "my": "./assets/My.mp4",
    "n": "./assets/N.mp4",
    "name": "./assets/Name.mp4",
    "next": "./assets/Next.mp4",
    "not": "./assets/Not.mp4",
    "now": "./assets/Now.mp4",
    "o": "./assets/O.mp4",
    "of": "./assets/Of.mp4",
    "on": "./assets/On.mp4",
    "our": "./assets/Our.mp4",
    "out": "./assets/Out.mp4",
    "p": "./assets/P.mp4",
    "pretty": "./assets/Pretty.mp4",
    "q": "./assets/Q.mp4",
    "r": "./assets/R.mp4",
    "right": "./assets/Right.mp4",
    "s": "./assets/S.mp4",
    "sad": "./assets/Sad.mp4",
    "safe": "./assets/Safe.mp4",
    "see": "./assets/See.mp4",
    "self": "./assets/Self.mp4",
    "sign": "./assets/Sign.mp4",
    "sing": "./assets/Sing.mp4",
    "so": "./assets/So.mp4",
    "sound": "./assets/Sound.mp4",
    "stay": "./assets/Stay.mp4",
    "study": "./assets/Study.mp4",
    "t": "./assets/T.mp4",
    "talk": "./assets/Talk.mp4",
    "television": "./assets/Television.mp4",
    "thank you": "./assets/Thank You.mp4",
    "thank": "./assets/Thank.mp4",
    "that": "./assets/That.mp4",
    "they": "./assets/They.mp4",
    "this": "./assets/This.mp4",
    "those": "./assets/Those.mp4",
    "time": "./assets/Time.mp4",
    "to": "./assets/To.mp4",
    "type": "./assets/Type.mp4",
    "u": "./assets/U.mp4",
    "us": "./assets/Us.mp4",
    "v": "./assets/V.mp4",
    "w": "./assets/W.mp4",
    "walk": "./assets/Walk.mp4",
    "wash": "./assets/Wash.mp4",
    "way": "./assets/Way.mp4",
    "we": "./assets/We.mp4",
    "welcome": "./assets/Welcome.mp4",
    "what": "./assets/What.mp4",
    "when": "./assets/When.mp4",
    "where": "./assets/Where.mp4",
    "which": "./assets/Which.mp4",
    "who": "./assets/Who.mp4",
    "whole": "./assets/Whole.mp4",
    "whose": "./assets/Whose.mp4",
    "why": "./assets/Why.mp4",
    "with": "./assets/With.mp4",
    "will": "./assets/Will.mp4",
    "without": "./assets/Without.mp4",
    "words": "./assets/Words.mp4",
    "work": "./assets/Work.mp4",
    "world": "./assets/World.mp4",
    "wrong": "./assets/Wrong.mp4",
    "x": "./assets/x.mp4",
    "y": "./assets/y.mp4",
    "you": "./assets/You.mp4",
    "your": "./assets/Your.mp4",
    "yourself": "./assets/Yourself.mp4",
    "z": "./assets/Z.mp4",
    "0": "./assets/0.mp4",
    "1": "./assets/1.mp4",
    "2": "./assets/2.mp4",
    "3": "./assets/3.mp4",
    "4": "./assets/4.mp4",
    "5": "./assets/5.mp4",
    "6": "./assets/6.mp4",
    "7": "./assets/7.mp4",
    "8": "./assets/8.mp4",
    "9": "./assets/9.mp4",
    "vanakkam" : "./assets/Hello.mp4",
    "Enna" : "./assets/What.mp4",
    "yeppo": "./assets/When.mp4",
    "yenga": "./assets/Where.mp4",
    "yethu": "./assets/Which.mp4",
    "yaaru": "./assets/Who.mp4",
    "yarudaiyathu": "./assets/Whose.mp4",
    "enn": "./assets/Why.mp4",
    "velai": "./assets/Work.mp4",
    "vayasu": "./assets/Age.mp4",
    "kelu": "./assets/Ask.mp4",
    "alagu": "./assets/Beautiful.mp4",
    "munadi": "./assets/Before.mp4",
    "anaal": "./assets/But.mp4",
    "mattram": "./assets/Change.mp4",
    "kalluri": "./assets/College.mp4",
    "vaa": "./assets/Come.mp4",
    "kanini": "./assets/Computer.mp4",
    "naal": "./assets/Day.mp4",
    "sapdu": "./assets/Eat.mp4",
    "sandai": "./assets/Fight.mp4",
    "poo": "./assets/Go.mp4",
    "kadavul": "./assets/God.mp4",
    "thangam": "./assets/gold.mp4",
    "nallathu": "./assets/Good.mp4",
    "kai": "./assets/Hand.mp4",
    "kaigal": "./assets/Hands.mp4",
    "sandhosam": "./assets/Happy.mp4",
    "udhavi": "./assets/Help.mp4",
    "aval": "./assets/Her.mp4",
    "inga": "./assets/Here.mp4",
    "veedu": "./assets/Home.mp4",
    "mozhi": "./assets/Language.mp4",
    "siri": "./assets/Laugh.mp4",
    "naan": "./assets/ME.mp4",
    "peyar": "./assets/Name.mp4",
    "aduthu": "./assets/Next.mp4",
    "varutham": "./assets/Sad.mp4",
    "paathukapu": "./assets/Safe.mp4",
    "paar": "./assets/See.mp4",
    "adaiyalam": "./assets/Sign.mp4",
    "satham": "./assets/Sound.mp4",
    "padi": "./assets/Study.mp4",
    "nandri": "./assets/Thank You.mp4",
    "vazhi": "./assets/Way.mp4",
    "naanga": "./assets/We.mp4",
    "nee": "./assets/You.mp4",
    "unudaiya": "./assets/Your.mp4",
};

// Add alphabet mappings
const alphabetVideos = {
    "a": "./assets/A.mp4",
    "b": "./assets/B.mp4",
    "c": "./assets/C.mp4",
    "d": "./assets/D.mp4",
    "e": "./assets/E.mp4",
    "f": "./assets/F.mp4",
    "g": "./assets/G.mp4",
    "h": "./assets/H.mp4",
    "i": "./assets/I.mp4",
    "j": "./assets/J.mp4",
    "k": "./assets/K.mp4",
    "l": "./assets/L.mp4",
    "m": "./assets/M.mp4",
    "n": "./assets/N.mp4",
    "o": "./assets/O.mp4",
    "p": "./assets/P.mp4",
    "q": "./assets/Q.mp4",
    "r": "./assets/R.mp4",
    "s": "./assets/S.mp4",
    "t": "./assets/T.mp4",
    "u": "./assets/U.mp4",
    "v": "./assets/V.mp4",
    "w": "./assets/W.mp4",
    "x": "./assets/X.mp4",
    "y": "./assets/Y.mp4",
    "z": "./assets/Z.mp4",
    // Add uppercase variants to handle both cases
    "A": "./assets/A.mp4",
    "B": "./assets/B.mp4",
    "C": "./assets/C.mp4",
    "D": "./assets/D.mp4",
    "E": "./assets/E.mp4",
    "F": "./assets/F.mp4",
    "G": "./assets/G.mp4",
    "H": "./assets/H.mp4",
    "I": "./assets/I.mp4",
    "J": "./assets/J.mp4",
    "K": "./assets/K.mp4",
    "L": "./assets/L.mp4",
    "M": "./assets/M.mp4",
    "N": "./assets/N.mp4",
    "O": "./assets/O.mp4",
    "P": "./assets/P.mp4",
    "Q": "./assets/Q.mp4",
    "R": "./assets/R.mp4",
    "S": "./assets/S.mp4",
    "T": "./assets/T.mp4",
    "U": "./assets/U.mp4",
    "V": "./assets/V.mp4",
    "W": "./assets/W.mp4",
    "X": "./assets/X.mp4",
    "Y": "./assets/Y.mp4",
    "Z": "./assets/Z.mp4"
};
"abcdefghijklmnopqrstuvwxyz".split('').forEach(letter => {
    alphabetVideos[letter] = `./assets/${letter.toUpperCase()}.mp4`;
    alphabetVideos[letter.toUpperCase()] = `./assets/${letter.toUpperCase()}.mp4`;
});
Object.assign(signVideos, alphabetVideos);

// DOM Elements
const textForm = document.getElementById('textForm');
const textInput = document.getElementById('textInput');
const videoContainer = document.getElementById('videoContainer');

// Function to play videos without controls
function playVideosSequentially(videoList, index = 0) {
    if (index >= videoList.length) return;

    const video = document.createElement('video');
    video.src = videoList[index];
    video.autoplay = true;
    video.loop = false;
    video.muted = true;
    video.playsInline = true;
    video.style.cssText = "width: 400px; height: auto; max-width: 100%; border-radius: 10px;";

    videoContainer.innerHTML = '';
    videoContainer.appendChild(video);

    video.onended = () => {
        playVideosSequentially(videoList, index + 1);
    };
}

// Handle sentence playback
function playSentenceAnimation(text) {
    const words = text.toLowerCase().split(' ');
    const videoQueue = [];

    words.forEach(word => {
        if (signVideos[word]) {
            videoQueue.push(signVideos[word]);
        } else {
            word.split('').forEach(letter => {
                if (signVideos[letter]) {
                    videoQueue.push(signVideos[letter]);
                }
            });
        }
    });

    playVideosSequentially(videoQueue);
}

// Form submission
textForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = textInput.value.trim();
    if (text) {
        playSentenceAnimation(text);
    }
});

// Speech recognition
document.addEventListener('DOMContentLoaded', () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.continuous = false;

        const textInput = document.getElementById('textInput');
        const voiceInput = document.getElementById('voiceInput');

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.trim().replace(/\.$/, '');
            textInput.value = transcript;
            // Optional: playSentenceAnimation(transcript);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };

        voiceInput.addEventListener('click', () => {
            recognition.start();
        });
    } else {
        console.warn('Speech Recognition API not supported.');
        document.getElementById('voiceInput').disabled = true;
    }
});