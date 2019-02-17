from twilio.rest import Client
# Your Account SID from twilio.com/console
account_sid = "ACbce739c8f483a6c8ed28343e6b2a1d37"
# Your Auth Token from twilio.com/console
auth_token  = "d034aa55e93ae2f34740bb916e24d943"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+19727624288", 
    from_="+19729925293",
    body="Your patient has requested your care! Please reach out to them as soon as you can.")
def sendMessage():
    print(message.sid)
if __name__ == "__main__":
    sendMessage()