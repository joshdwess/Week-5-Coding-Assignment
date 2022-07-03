class VideoGame{
    constructor(name,price){
        this.name= name
        this.price= price
    }

    describe(){
        return `${this.name} costs ${this.price}`;
    }
    
}
//A wishlist for each gaming system
class Wishlist {
    constructor(name){
        this.name= name        
        this.games = [];
    }

    //A method to add games to the users desired wishlist
    addGame(game) {
        if (game instanceof VideoGame) {
            this.games.push(game)
        } else {
            throw new Error(`You can only add an instance of VideoGame. Argument is not a game: ${game}`) 
        }
    }

    describe() {
        return `you can buy ${this.game} for this ${this.name}`
    }
}

class Menu {
    constructor(){
      this.wishlists = []
      this.selectedWishlist = null  //We set this to null because no wishlist is selected in the beginning
    }
    
    start(){
        let selection = this.showMainMenuOptions() 
        while (selection != 0) { 
            switch (selection) {
                case '1':
                this.createWishlist();
                break;
                case '2':
                    this.viewWishlist()
                    break;
                case '3':     
                this.deleteWishlist()
                break;
                case '4':
                this.displayWishlist()
                break;
                default:
                    selection = 0;   
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!')
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new wishlist
        2) view wishlist
        3) delete wishlist
        4) display all wishlists
        `)
    }

    showWishlistMenuOptions(wishlistInfo) {
        return prompt (`
        0) back
        1) create game
        2) delete game
        --------------
        ${wishlistInfo}
        `)
    }

    displayWishlists() {
        
let wishlistString = '';
        for (let i=0; i < this.wishlists.length; i++) {
            wishlistString += i + ')' + this.name + '\n';
        }
        alert(wishlistString);
    }

    createWishlist(){
        let name = prompt('Enter name for new wishlist')
        this.wishlists.push(new Wishlist(name))
    }

    viewWishlist() {
        let index = prompt('Enter the index of the wishlist you wish to view:')
        if (index > - 1 && index < this.wishlists.length) {
            this.selectedWishlist = this.wishlists[index];
            let description = 'Wishlist Name' + this.selectedWishlist.name + '\n';
            for (let i= 0; i< this.selectedWishlist.games.length; i++) {
                description += i + ')' + this.selectedWishlist.games[i].name 
                + ' - ' + this.selectedWishlist.games[i].price + '\n';
            }
            let selection= this.showWishlistMenuOptions(description)
            switch(selection) {
                case '1':
                    this.createGame
                    break;
                case '2':
                    this.deleteGame()

            }
        }
    }

    deleteWishlist() {
        let index= prompt('Enter the index of the wishlist you wish to delete:')
        if (index > -1 && index < this.wishlists.length) {
            this.wishlists.splice(index, 1)
        }
    }

    createGame() {
        let name = prompt('Enter name for new game:');
        let position = prompt ('Enter price for new game');
        this.selectedWishlist.games.push(new Videogame)
    }

    deleteGame() {
        let index = prompt('Enter the index of the game you wish to delete:') 
            if (index > -1 && index < this.selectedWishlist.games.length) {
            this.selectedWishlist.games.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start()