Citizen.CreateThread(function() 
    RegisterCommand('testFish', function(source)
        local book = {
                type = "comic",
                frontPage = "https://imgur.com/PEdkyzp.jpg",
                backFrontPage = "https://imgur.com/PEdkyzp.jpg",
                frontBackPage = "https://imgur.com/PEdkyzp.jpg",
                backPage = "https://imgur.com/PEdkyzp.jpg",
                pages = {
                    {img = "https://imgur.com/rjdCy5w.png"},
                    {img = "https://imgur.com/rjdCy5w.png"},
                    {img = "https://imgur.com/rjdCy5w.png"},
                    {img = "https://imgur.com/rjdCy5w.png"},
                    {img = "https://imgur.com/rjdCy5w.png"},
                    {img = "https://imgur.com/rjdCy5w.png"},
                    {img = "https://imgur.com/rjdCy5w.png"},
                    {img = "https://imgur.com/rjdCy5w.png"},
                    {img = "https://imgur.com/rjdCy5w.png"},
                    {img = "https://imgur.com/rjdCy5w.png"}
                }
            }
        TriggerClientEvent('bd-books:openBookByMetadata', source, book)
    end)
end)