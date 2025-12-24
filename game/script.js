   let cards = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍒", "🍒",
            "🍉", "🍉", "🍓", "🍓", "🥝", "🥝", "🍍", "🍍"];
        cards.sort(() => Math.random());

        let OPEN_CARDS = [];

        for (let i = 0; i < cards.length; i++) {
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = cards[i];

            card.onclick = handleClick;

            document.getElementById("game").appendChild(card);
        }

        setTimeout(() => {
            let all = document.querySelectorAll(".card");
            all.forEach(c => c.innerHTML = "?");
        }, 3000);

        function handleClick() {
            if (this.classList.contains("matched")) return;

            if (this.innerHTML === "?") {
                let index = Array.from(this.parentNode.children).indexOf(this);
                this.innerHTML = cards[index];
            }

            OPEN_CARDS.push(this);
            this.classList.add("show");

            if (OPEN_CARDS.length === 2) {
                if (OPEN_CARDS[0].innerHTML === OPEN_CARDS[1].innerHTML) {
                    OPEN_CARDS[0].classList.add("matched");
                    OPEN_CARDS[1].classList.add("matched");
                    OPEN_CARDS = [];
                } else {
                    OPEN_CARDS[0].classList.add("unmatched");
                    OPEN_CARDS[1].classList.add("unmatched");

                    setTimeout(() => {
                        OPEN_CARDS[0].innerHTML = "?";
                        OPEN_CARDS[1].innerHTML = "?";
                        OPEN_CARDS[0].classList.remove("show", "unmatched");
                        OPEN_CARDS[1].classList.remove("show", "unmatched");
                        OPEN_CARDS = [];
                    }, 2000);
                }
            }
        }