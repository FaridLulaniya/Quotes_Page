const quotes = [
    {
      image: './Edited Guts Icon.jpeg',
      name: 'Gattsu',
      text: "The reward for ambition too great... is self destruction.",
    },
    {
      image: 'https://i.pinimg.com/736x/34/38/86/34388676fde2541933cb8f2957285438.jpg',
      name: 'Robert Pattinson',
      text: '"I generally like people who are a bit crazy, but yeah, thats pretty much my only prerequisite."',
    },
    {
      image: 'https://i.pinimg.com/736x/a2/1a/90/a21a905485821bd30817188b9461e707.jpg',
      name: 'Christian Bale',
      text: '"I only sound intelligent when there,s a good script writer around."',
    },
    {
      image: 'https://i.pinimg.com/736x/d7/4f/ed/d74fed9f6b32410ee184347b1362216a.jpg',
      name: 'Joe Goldberg',
      text: '"THE REAL TRAGEDY WOULD BE NOT APPRECIATING WHAT YOU HAVE."',
    },
    {
      image: 'https://i.pinimg.com/736x/6a/99/b4/6a99b4d9effee9ae536ac6daaa50b7d0.jpg',
      name: 'Homelander',
      text: '"I AM NOT JUST LIKE THE REST OF YOU, I AM STRONGER, I AM SMARTER, I AM BETTER,  IAM BETTER!"',
    },
  ];
  
  let currentIndex = 0;
  
  document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex +1) % quotes.length;
  
    const { image, name, role, text } = quotes[currentIndex];
    document.getElementById('profile-img').src = image;
    document.getElementById('quote-name').textContent = name;
    document.getElementById('quote-text').textContent = text.toUpperCase();
  });
  