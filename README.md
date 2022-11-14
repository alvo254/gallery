## Creating a collection
db.createCollection("<collection name>")

# Inserting data into a collection
db.gallery.insertOne({image:"https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"})

# Finding 
db.gallery.find({}, {_id:0})

