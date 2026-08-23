/* =========================================
   FILTROWANIE GRUP CENNIKA
========================================= */

const filterButtons = document.querySelectorAll(".filter-button");
const pricingGroups = document.querySelectorAll(".pricing-group");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        /* =========================
           AKTYWNY PRZYCISK
        ========================== */

        filterButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");


        /* =========================
           WYBRANY FILTR
        ========================== */

        const filter = button.dataset.filter;


        /* =========================
           POKAZYWANIE GRUP
        ========================== */

        pricingGroups.forEach(group => {

            const type = group.dataset.type;


            if (filter === "all") {

                group.classList.remove("hidden");

                return;

            }


            /*
                MATY
                pokazują:
                - maty
                - indywidualne maty
                - duet maty
            */

            if (filter === "maty") {

                if (
                    type === "maty" ||
                    type === "indywidualne-maty" ||
                    type === "duet-maty"
                ) {

                    group.classList.remove("hidden");

                } else {

                    group.classList.add("hidden");

                }

                return;

            }


            /*
                REFORMER
                pokazują:
                - reformer grupowy
                - reformer indywidualny
                - duet reformer
            */

            if (filter === "reformer") {

                if (
                    type === "reformer" ||
                    type === "indywidualne-reformer" ||
                    type === "duet-reformer"
                ) {

                    group.classList.remove("hidden");

                } else {

                    group.classList.add("hidden");

                }

                return;

            }


            /*
                INDYWIDUALNE
            */

            if (filter === "indywidualne") {

                if (
                    type === "indywidualne-maty" ||
                    type === "indywidualne-reformer"
                ) {

                    group.classList.remove("hidden");

                } else {

                    group.classList.add("hidden");

                }

                return;

            }


            /*
                DUET
            */

            if (filter === "duet") {

                if (
                    type === "duet-maty" ||
                    type === "duet-reformer"
                ) {

                    group.classList.remove("hidden");

                } else {

                    group.classList.add("hidden");

                }

            }

        });


        /* =========================
           POWRÓT NA POCZĄTEK CENNIKA
        ========================== */

        const pricingSection =
            document.querySelector(".pricing-section");

        if (pricingSection) {

            const offset =
                pricingSection.getBoundingClientRect().top +
                window.scrollY -
                20;

            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });

        }

    });

});