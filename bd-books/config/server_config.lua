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

        -- -- QBCore.RegisterUsableItem('book', function(source, item)
        --     TriggerClientEvent('bd-books:opencontract', source, item.contract)
        -- end)

    RegisterCommand('createBook', function(source, args, raw)
        local player = PlayerPedId()
		if Player ~= nil then
            TriggerEvent('player:receiveItem', 'book', 1, false, {contract = args[1]})
        end
    end, false)
end)