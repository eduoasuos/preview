var animations = [
  [
   {
     id: '#i01',
     duration: 650,
     delayBefore: 150,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, scale:[1,1.25]}
   }, 
   {
     id: '#i02',
     duration: 350,
     delayBefore: 350,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, scale:[1,1.25]}
   },        
   {
     id: '#i03',
     duration: 650,
     delayBefore: 450,
     delayAfter: 0,
     easing: "easeOutBack",
     animations: {opacity:1, left:0, top:0, scale:[1,0.6]}
   },               
   {
     id: '#i04',
     duration: 650,
     delayBefore: 550,
     delayAfter: 0,
     easing: "easeOutBack",
     animations: {opacity:1, left:0, top:0, scale:[1,0.6]}
   },               
   {
     id: '#i05',
     duration: 650,
     delayBefore: 650,
     delayAfter: 2500,
     easing: "easeOutBack",
     animations: {opacity:1, left:0, top:0, scale:[1,0.6]}
   },                              
  ],
  [
    {
      id: '#i03',
      duration: 650,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, scale:[0.6,1]}
    },  
    {
      id: '#i04',
      duration: 650,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, scale:[0.6,1]}
    },  
    {
      id: '#i05',
      duration: 650,
      delayBefore: 200,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, scale:[0.6,1]}
    },    
  ],
  [
    {
      id: '#i02',
      duration: 350,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.25,1]}
    },    
    {
      id: '#i02',
      duration: 350,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1,1.25]}
    },
    {
      id: '#i06',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutBack",
      animations: {opacity:1, scale:[1,0.6]}
    },               
    {
      id: '#i07',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutBack",
      animations: {opacity:1, scale:[1,0.6]}
    },               
    {
      id: '#i08',
      duration: 650,
      delayBefore: 650,
      delayAfter: 2500,
      easing: "easeOutBack",
      animations: {opacity:1, scale:[1,0.6]}
    },                               
  ],
  [
    {
      id: '#i06',
      duration: 650,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, scale:[0.6,1]}
    },  
    {
      id: '#i07',
      duration: 650,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, scale:[0.6,1]}
    },  
    {
      id: '#i08',
      duration: 650,
      delayBefore: 200,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, scale:[0.6,1]}
    },    
  ],
  [
    {
      id: '#i02',
      duration: 350,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.25,1]}
    },    
    {
      id: '#i02',
      duration: 350,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1,1.25]}
    },
    {
      id: '#i09',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutBack",
      animations: {opacity:1, scale:[1,0.6]}
    },               
    {
      id: '#i11',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutBack",
      animations: {opacity:1, scale:[1,0.6]}
    },               
    {
      id: '#i10',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutBack",
      animations: {opacity:1, scale:[1,0.6]}
    },
    {
      id: '#i11',
      duration: 350,
      delayBefore: 500,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.1,1]}
    },    
    {
      id: '#i11',
      duration: 350,
      delayBefore: 500,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1,1.1]}
    },                                              
  ],
]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      