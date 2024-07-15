# This is backend for my chatapplication website 


# how to acess the website 
websitelink: https://chatapp1212.netlify.app/

backendserverlink: https://livechat-backend-j9re.onrender.com
# how to use website
In the webSite first You need to signUp as user using your email address ,username and password .This will take you to home page.
On left side you can see your chats (initially empty) Click on 'allusers' you will see all users list and their online status .you can click on any user and start coversation. You can also create groups with users.


## api routes 


# post('api/user/',createUser) -- create a new user
# get('api/user/', getUsers)
sends all user data if no query
sends user with firebase id if query fid is provided
sends all users in a particular chat if query grpid is provide

# get('api/user/:id', getUserByID)
sends user whose mongodbId is id

# put('api/user/:id', UpdateUser)
update user details

# post('api/chat/',createChat)
 if chat is group it creates new chat and add this chat id to each member of grp and emit "newChat" event
 if chat is ono-to-one it first creates new message and the creates chat with this new message and emit "newChat" event


# get('api/chat/:userid',getUserChats)
sends all chats od particular user 

# get('api/chat/full/:userid',getUserChatswithmoreinfo)
sends all chats od particular user with more details i.e it popullates members,lastMessage instead of their objectids

# get('api/chat/',getOnechat)
sends particulat chat with query chatid

# post(api/message'/:chatid',createMessage)
creates new message in particular chat and add this message id to the chat
# get('api/message/:chatid',getChatMessages)
returns all messages in particular chat


