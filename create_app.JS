var data = {
  "template" : YOUR_TEMPLATE_ID,
  "modifications" : [
    {
     "name": "photo",
     "image_url": "https://images.unsplash.com/photo-1541267226650-673e4bc869c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
    },
    {
     "name": "country",
     "text": "Singapore"
    },
    {
     "name": "offer",
     "text": "*from* $129 *per night*"
    }
  ]
}
fetch('https://api.bannerbear.com/v2/images', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${API_KEY}`
  }
})
