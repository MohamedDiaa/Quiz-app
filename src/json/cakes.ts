const cakes: { name: string, country: string, description: string, img: string  }[]
= [
    {
        "name": "Amandine",
        "country": "Romania",
        "description": "A chocolate layered cake filled with chocolate, caramel and fondant cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amandine_cake.jpg/600px-Amandine_cake.jpg"
    },
    {
        "name": "Angel cake",
        "country": "United Kingdom[1]",
        "description": "A type of layered sponge cake, often garnished with cream and food coloring.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Homemade_Angel_Slice_Cake_Stock_Photo_%2848754448236%29.jpg/600px-Homemade_Angel_Slice_Cake_Stock_Photo_%2848754448236%29.jpg"
    },
    {
        "name": "Angel food cake",
        "country": "United States",
        "description": "A type of sponge cake made with egg whites, sugar, flour, vanilla, and a whipping agent such as cream of tartar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Angel_food_cake_with_strawberries_%284738859336%29.jpg/600px-Angel_food_cake_with_strawberries_%284738859336%29.jpg"
    },
    {
        "name": "Apple cake",
        "country": "Germany",
        "description": "A cake featuring apples, occasionally topped with caramel icing.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Apple_cake_with_vanilla_ice_cream_2.jpg/600px-Apple_cake_with_vanilla_ice_cream_2.jpg"
    },
    {
        "name": "Applesauce cake",
        "country": "New England[2]",
        "description": "A cake that is prepared using applesauce, flour, and sugar as primary ingredients.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Applesauce_cake.jpg/600px-Applesauce_cake.jpg"
    },
    {
        "name": "Aranygaluska",
        "country": "Hungary",
        "description": "A cake with yeasty dough and vanilla custard.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Arany-galuska.jpg/600px-Arany-galuska.jpg"
    },
    {
        "name": "Babka",
        "country": "Poland and Ukraine",
        "description": "A sweet braided cake originating in the Jewish community.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kranz_%28cake%29.jpg/600px-Kranz_%28cake%29.jpg"
    },
    {
        "name": "Babka Wielkanocna",
        "country": "Poland",
        "description": "An Easter cake with icing.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Babka_%C5%9Bwi%C4%85teczna.jpg/600px-Babka_%C5%9Bwi%C4%85teczna.jpg"
    },
    {
        "name": "Ballokume[3]",
        "country": "Albania",
        "description": "A cake made with corn flour, butter, sugar, and vanilla.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/BallokumeShqiptare.jpg/600px-BallokumeShqiptare.jpg"
    },
    {
        "name": "Banana bread",
        "country": "United States",
        "description": "A sweet bread made with bananas, sometimes with the addition of nuts or chocolate.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Banananutbread.jpg/600px-Banananutbread.jpg"
    },
    {
        "name": "Banana cake",
        "country": "United States",
        "description": "A cake featuring banana as a primary ingredient.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Banana_cake.jpg/600px-Banana_cake.jpg"
    },
    {
        "name": "Bánh bò",
        "country": "Vietnam",
        "description": "A spongey cake with honeycomb-like structures, typically made with coconut milk, rice flour, water and sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Banh_Bo_Nuong.jpg/600px-Banh_Bo_Nuong.jpg"
    },
    {
        "name": "Bánh cáy",
        "country": "Vietnam",
        "description": "Vietnamese dessert made in the Thái Bình Province of northern Vietnam. It is made of sticky rice, sugar, gac or gardenia, sesame, carrots, mandarin orange peel, and lard.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/B%C3%A1nh_c%C3%A1y.JPG/600px-B%C3%A1nh_c%C3%A1y.JPG"
    },
    {
        "name": "Bánh cốm",
        "country": "Vietnam",
        "description": "Vietnamese dessert made from flattened and chewy green rice and mung bean.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Banh_com.png/600px-Banh_com.png"
    },
    {
        "name": "Bánh gai",
        "country": "Vietnam",
        "description": "Vietnamese dessert made from sticky rice, ramie leaf and mung bean.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Banh_gai_3.jpg/600px-Banh_gai_3.jpg"
    },
    {
        "name": "Bara brith",
        "country": "Wales",
        "description": "A Welsh tea bread flavored with raisins, currants and candied peel.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bara_Brith_%283320696816%29.jpg/600px-Bara_Brith_%283320696816%29.jpg"
    },
    {
        "name": "Basbousa",
        "country": "Egypt",
        "description": "A traditional Egyptian sweet cake that is made of cooked semolina or farina soaked in simple syrup. Coconut is a popular addition; the syrup may also contain orange flower water or rose water.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Basboosa.jpg/600px-Basboosa.jpg"
    },
    {
        "name": "Batik cake",
        "country": "Malaysia",
        "description": "A non-baked cake dessert made by mixing broken Marie biscuits with a chocolate sauce or runny custard.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Malaysian_batik_cake.jpg/600px-Malaysian_batik_cake.jpg"
    },
    {
        "name": "Battenberg cake",
        "country": "United Kingdom",
        "description": "A sponge cake held together by jam and covered in marzipan.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lyons_battenberg_cake.jpg/600px-Lyons_battenberg_cake.jpg"
    },
    {
        "name": "Baumkuchen",
        "country": "Germany",
        "description": "A German variety of spit cake also popular in Japan. The characteristic rings, which resemble tree rings when sliced, give the cake its German name, which literally translates to \"tree cake\".",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Baumkuchen.jpg/600px-Baumkuchen.jpg"
    },
    {
        "name": "Beer cake",
        "country": "Ireland",
        "description": "Any cake prepared with beer as a main ingredient; pictured is a chocolate bundt cake infused with stout beer.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Chocolate_Stout_Cake.jpg/600px-Chocolate_Stout_Cake.jpg"
    },
    {
        "name": "Berlingozzo",
        "country": "Lamporecchio",
        "description": "A simple ring-shaped yeast cake to celebrate Carnival.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Berlingozzo.jpg/600px-Berlingozzo.jpg"
    },
    {
        "name": "Better than sex cake",
        "country": "United States",
        "description": "A chocolate or yellow cake with a moist, filled center, covered with whipped cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Better_than_sex_cake%2C_1981_recipe.jpg/600px-Better_than_sex_cake%2C_1981_recipe.jpg"
    },
    {
        "name": "Bibikkan",
        "country": "Sri Lanka",
        "description": "A cake made of shredded coconut, jaggery and semolina and a mixture of spices; it is commonly prepared and consumed in celebration of festive and religious occasions.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bibikkan.jpg/600px-Bibikkan.jpg"
    },
    {
        "name": "Bibingka",
        "country": "Philippines",
        "description": "A traditional rice cake from the Philippines made with ground glutinous rice and coconut milk.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/1048Bibingka_Puto_bumbong_making_Philippines_04.jpg/600px-1048Bibingka_Puto_bumbong_making_Philippines_04.jpg"
    },
    {
        "name": "Bienenstich (Bee Sting)",
        "country": "Germany",
        "description": "A yeast cake with a topping of caramelized almonds and filled with cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bienenstich_140531_AW.jpg/600px-Bienenstich_140531_AW.jpg"
    },
    {
        "name": "Birthday cake",
        "country": "Unknown",
        "description": "A cake that has various ingredients, usually chocolate or sponge, and is often topped with icing and candles; the number of candles on top of the cake is often said to represent someone's age (for example, a birthday cake for a nine-year-old would have nine candles).",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Birthday_cake.jpg/600px-Birthday_cake.jpg"
    },
    {
        "name": "Biscoff cake",
        "country": "United States and Europe",
        "description": "A cake that incorporates Lotus Biscoff cookies.[4]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Biscoffcake20.jpg/600px-Biscoffcake20.jpg"
    },
    {
        "name": "Bizcocho Dominicano",
        "country": "Dominican Republic",
        "description": "A cake with a moist, airy texture and meringue frosting.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/DominicanCake.jpg/600px-DominicanCake.jpg"
    },
    {
        "name": "Black Forest cake, often known as \"Black Forest gâteau\" or \"Schwarzwälder Kirschtorte\"",
        "country": "Germany",
        "description": "A cake featuring cherries, kirsch, and chocolate. Typically, there is one bottom layer of chocolate shortcrust and two layers of chocolate sponge cake; the cake is then filled with cherry jam and whipped cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kirschtorte.jpg/600px-Kirschtorte.jpg"
    },
    {
        "name": "Blackout cake, sometimes known as \"Brooklyn Blackout cake\"",
        "country": "Brooklyn, United States",
        "description": "A chocolate cake filled with chocolate pudding and topped with chocolate cake crumbs.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Blackout_cake.jpg/600px-Blackout_cake.jpg"
    },
    {
        "name": "Bolo de mel",
        "country": "Madeira Islands",
        "description": "A sweet, heavy cake made with molasses or honey, often with walnuts and almonds. The name translates to \"honey cake\".",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bolo_de_Mel.JPG/600px-Bolo_de_Mel.JPG"
    },
    {
        "name": "Bologna cake",
        "country": "Southern United States",
        "description": "A savory cake consisting of layers of bologna sausage and cream cheese with ranch dressing, often served with crackers or toast.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bologna_cake.jpg/600px-Bologna_cake.jpg"
    },
    {
        "name": "Boston cream pie",
        "country": "United States",
        "description": "A yellow cake filled with custard and topped with some form of chocolate.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bostoncreampie.jpg/600px-Bostoncreampie.jpg"
    },
    {
        "name": "Brazil nut cake",
        "country": "Brazil",
        "description": "A cake prepared using Brazil nuts as a primary ingredient; it is common in the Amazon region of Brazil, Bolivia and Peru",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Brazil_Nut_Poundcake.png/600px-Brazil_Nut_Poundcake.png"
    },
    {
        "name": "Brazo de Mercedes",
        "country": "Philippines",
        "description": "A traditional Filipino meringue roll with a custard filling typically dusted with powdered sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Brazo_de_mercedes.jpg/600px-Brazo_de_mercedes.jpg"
    },
    {
        "name": "Broyé poitevin",
        "country": "Poitou",
        "description": "A simple butter cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Broye_du_Poitou.jpg/600px-Broye_du_Poitou.jpg"
    },
    {
        "name": "Bublanina",
        "country": "Czech Republic",
        "description": "A sweet kneaded bun with fruit embedded into the top of the pastry.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bublanina_5553-1.jpg/600px-Bublanina_5553-1.jpg"
    },
    {
        "name": "Buccellato",
        "country": "Sicily",
        "description": "A circular cake containing nuts and candied fruit, traditionally associated with Christmas.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Buccellato_1.jpg/600px-Buccellato_1.jpg"
    },
    {
        "name": "Buche de Noel",
        "country": "France",
        "description": "A traditional Christmas cake made to resemble a log, commonly decorated with confections shaped as various woodland items such as mushrooms, snow and berries. Also known as a yule log.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/B%C3%BBche_de_No%C3%ABl_chocolat_framboise_maison.jpg/600px-B%C3%BBche_de_No%C3%ABl_chocolat_framboise_maison.jpg"
    },
    {
        "name": "Budapestlängd[5]",
        "country": "Sweden",
        "description": "A rolled meringue-hazelnut cake filled with whipped cream and pieces of canned peach, apricot, or mandarin orange.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Budapestbakelse_B%C3%85n.JPG/600px-Budapestbakelse_B%C3%85n.JPG"
    },
    {
        "name": "Buko pandan cake",
        "country": "Philippines",
        "description": "A sponge or chiffon cake flavored with extracts from boiled pandan leaves and frosted with cream and young coconut or macapuno strips",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pandan_Cake.jpg/600px-Pandan_Cake.jpg"
    },
    {
        "name": "Bundt cake",
        "country": "United States",
        "description": "A cake that is baked in a Bundt pan, shaping it into a distinctive ring shape. The shape is inspired by a traditional European fruit cake known as Gugelhupf. Bundt cakes are not generally associated with any single recipe, but they are often made with chocolate.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bundt_Cake_with_Grapes_001.jpg/600px-Bundt_Cake_with_Grapes_001.jpg"
    },
    {
        "name": "Bustrengo",
        "country": "San Marino",
        "description": "A dense and moist cake containing cornmeal, bread crumbs or stale bread, figs, raisins, diced apples, lemon rind and orange rind.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Bustrengo.jpg/600px-Bustrengo.jpg"
    },
    {
        "name": "Butter cake",
        "country": "United Kingdom",
        "description": "A cake featuring butter as one of the main ingredients.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Hazelnut_brown_butter_cake.jpg/600px-Hazelnut_brown_butter_cake.jpg"
    },
    {
        "name": "Butterfly cake",
        "country": "United Kingdom",
        "description": "A variant of cupcake, also called \"fairy cake\" for its fairy-like \"wings\". They can be made from any flavor of cake. The top of the fairy cake is cut off or carved out with a spoon, and cut in half. Then, butter cream, whipped cream, or other sweet filling like jam is spread into the hole. Finally, the two cut halves are stuck into the butter cream to look like butterfly wings. The wings of the cake are often decorated using icing to form various patterns.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chocolate_butterfly_cake.jpg/600px-Chocolate_butterfly_cake.jpg"
    },
    {
        "name": "Butterkuchen",
        "country": "Germany",
        "description": "A simple buttery and sweet German cake baked on a tray.[6]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Butterkuchen2.JPG/600px-Butterkuchen2.JPG"
    },
    {
        "name": "Carrot cake",
        "country": "United Kingdom",
        "description": "A moist, dense, sweet cake made with carrots. Variations include Rüblitorte, a classic Swiss carrot cake made from a sponge cake with carrots and hazelnuts or almonds, glazed with a sugar glaze, and decorated with small marzipan carrots.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Carrot_cake_at_America_Graffiti_%28cropped%29.jpg/600px-Carrot_cake_at_America_Graffiti_%28cropped%29.jpg"
    },
    {
        "name": "Cassata",
        "country": "Sicily",
        "description": "Cassata consists of round sponge cake moistened with fruit juices or liqueur and layered with ricotta, candied peel, and a chocolate or vanilla filling similar to cannoli cream. It is covered with a shell of marzipan, pink and green pastel colored icing, and decorative designs. The cassata is topped with candied fruit depicting cherries and slices of citrus fruit characteristic of Sicily.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Cassata_siciliana.jpg/600px-Cassata_siciliana.jpg"
    },
    {
        "name": "Cassatella di sant'Agata",
        "country": "Sicily",
        "description": "Cakes shaped like breasts to honor Saint Agatha of Sicily. Made of sponge, moistened with juice or liqueur, and stuffed with ricotta and chocolate. Decorated with marzipan, icing, and candied fruit.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Minnuzze_di_sant%27aita.jpg/600px-Minnuzze_di_sant%27aita.jpg"
    },
    {
        "name": "Cassava cake",
        "country": "Philippines",
        "description": "A traditional Filipino moist cake made from grated cassava, coconut milk, and condensed milk with a custard layer on top.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Cassava_cake_%28Philippines%29_-_Bibingkang_kamoteng_kahoy_01.jpg/600px-Cassava_cake_%28Philippines%29_-_Bibingkang_kamoteng_kahoy_01.jpg"
    },
    {
        "name": "Castagnaccio",
        "country": "Italy",
        "description": "A plain chestnut flour cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Castagnaccio_ligure.jpg/600px-Castagnaccio_ligure.jpg"
    },
    {
        "name": "Castella",
        "country": "Japan",
        "description": "A moist spongecake made with flour, sugar, eggs, and mizuame.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Castella%2Cmade_in_nagasaki-city%2Cjapan.JPG/600px-Castella%2Cmade_in_nagasaki-city%2Cjapan.JPG"
    },
    {
        "name": "Caterpillar cake",
        "country": "United Kingdom",
        "description": "A chocolate Swiss roll decorated to look like a caterpillar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Caterpillar_chocolate_cake_%288367463320%29.jpg/600px-Caterpillar_chocolate_cake_%288367463320%29.jpg"
    },
    {
        "name": "Charlotte (cake)",
        "country": "France",
        "description": "A cake prepared firstly by lining a mold with bread, sponge cake, or biscuits; this base is then filled with fruit puree or custard.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Charlotte_aux_poires_et_chocolat.jpg/600px-Charlotte_aux_poires_et_chocolat.jpg"
    },
    {
        "name": "Cheesecake",
        "country": "Ancient Greece",
        "description": "A dessert with a thin base made from crushed biscuits and a thicker top layer of soft cheese, eggs and sugar. It can be baked or unbaked (in which case it is refrigerated.) The bottom layer can also be made of shortcrust, and in European countries the top layer is made from curd or a creamy kind of cottage cheese.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg/600px-Baked_cheesecake_with_raspberries_and_blueberries.jpg"
    },
    {
        "name": "Chestnut cake",
        "country": "France",
        "description": "A cake prepared using chestnuts or water chestnuts as a main ingredient. It is also dish in Chinese cuisine.[7]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Ard%C3%A9chois_%C3%A0_la_cr%C3%A8me_de_marron.jpg/600px-Ard%C3%A9chois_%C3%A0_la_cr%C3%A8me_de_marron.jpg"
    },
    {
        "name": "Chhena poda",
        "country": "Odisha",
        "description": "A cake made from milk solids and semolina. The milk solids, known as chhena, are the main ingredient; it is a specialty of the state of Odisha in India.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chennapoda.jpg/600px-Chennapoda.jpg"
    },
    {
        "name": "Chiffon cake",
        "country": "United States",
        "description": "A light, airy cake made with vegetable oil, eggs, sugar, and flour.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chiffon_cake_02.jpg/600px-Chiffon_cake_02.jpg"
    },
    {
        "name": "Chocolate cake",
        "country": "Unknown",
        "description": "A cake that features chocolate as a primary flavor.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/ChocolateTruffleCakeIdeal01.JPG/600px-ChocolateTruffleCakeIdeal01.JPG"
    },
    {
        "name": "Chocotorta",
        "country": "Argentina",
        "description": "A cake made with chocolate cookies, dulce de leche, and cream cheese.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Chocotorta_portion_on_a_plate.jpg/600px-Chocotorta_portion_on_a_plate.jpg"
    },
    {
        "name": "Christmas cake",
        "country": "United Kingdom",
        "description": "A cake flavored with dried fruit such as sultanas or raisins, as well as ingredients such as cinnamon, treacle, cherries, and almond; it is often topped with decorative icing.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Christmas_cake%2C_Boxing_Day_2008.jpg/600px-Christmas_cake%2C_Boxing_Day_2008.jpg"
    },
    {
        "name": "Clementine cake",
        "country": "Australia",
        "description": "A cake prepared with clementine as a primary ingredient.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Vanilla_clementine_cake.jpg/600px-Vanilla_clementine_cake.jpg"
    },
    {
        "name": "Coconut cake",
        "country": "United States",
        "description": "A popular dessert in the Southern region of the United States. It is a cake frosted with a white frosting and covered in coconut flakes.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Coconut_cake_garnished_with_Peeps_candy.jpg/600px-Coconut_cake_garnished_with_Peeps_candy.jpg"
    },
    {
        "name": "Coffee cake",
        "country": "Germany",
        "description": "A single-layer cake flavored with cinnamon and topped with a crumb topping, meant to be eaten with coffee.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Walnut_cinnamon_coffee_cake.jpg/600px-Walnut_cinnamon_coffee_cake.jpg"
    },
    {
        "name": "Coffee and walnut cake",
        "country": "United Kingdom",
        "description": "A sponge cake made with coffee and walnuts.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/-2016-02-18_Coffee_%26_Walnut_cake%2C_Trimingham.JPG/600px--2016-02-18_Coffee_%26_Walnut_cake%2C_Trimingham.JPG"
    },
    {
        "name": "Cookie Cake",
        "country": "United States",
        "description": "Cookie batter baked in a cake pan, topped with frosting and served in the style of traditional cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/160920-N-XP344-013_%2829519508330%29.jpg/600px-160920-N-XP344-013_%2829519508330%29.jpg"
    },
    {
        "name": "Cornbread",
        "country": "Americas",
        "description": "A cake containing wheat flour, cornmeal, sugar, and a fat such as lard or butter.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Skillet_cornbread_%28cropped%29.jpg/600px-Skillet_cornbread_%28cropped%29.jpg"
    },
    {
        "name": "Cozonac",
        "country": "Bulgaria, Romania",
        "description": "A traditional sweet leavened bread rich in eggs, milk, butter and sugar, with various fillings.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tumbl.jpg/600px-Tumbl.jpg"
    },
    {
        "name": "Crema de fruta",
        "country": "Philippines",
        "description": "A traditional Filipino fruitcake made with layers of sponge cake, sweet custard or whipped cream, gelatin or gulaman, and various preserved or fresh fruits, including mangoes, pineapples, cherries, and strawberries. Also has a very popular no-bake variant, the mango float.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/00114jfCuisine_of_Bulacan_Food_Cakes_Delicaciesfvf_30.jpg/600px-00114jfCuisine_of_Bulacan_Food_Cakes_Delicaciesfvf_30.jpg"
    },
    {
        "name": "Cremeschnitte",
        "country": "Slovenia\nCroatia\nGermany\nAustria",
        "description": "A vanilla and custard cream cake dessert popular in several central-European countries. There are many regional variations, but they all include puff pastry base and custard cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Kremna_rezina.jpg/600px-Kremna_rezina.jpg"
    },
    {
        "name": "Crystal cake",
        "country": "China",
        "description": "A traditional dessert in China, first invented during the Song dynasty. Its name is derived from the shine of its filling and overall appearance.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Crystal_cake.jpg/600px-Crystal_cake.jpg"
    },
    {
        "name": "Cuatro leches cake[8][9]",
        "country": "Spain",
        "description": "A cake made with four milks,[10] similar to the tres leches cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cuatroleches.jpg/600px-Cuatroleches.jpg"
    },
    {
        "name": "Cuca",
        "country": "Brazil",
        "description": "A dry, flat cake made of eggs, wheat and butter, with various toppings and fillings.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Cuca_de_banana.jpg/600px-Cuca_de_banana.jpg"
    },
    {
        "name": "Cupcake",
        "country": "United States",
        "description": "A small cake with various ingredients, usually topped with icing.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cupcakes%2C_chocolate_and_strawberry_flavour.jpg/600px-Cupcakes%2C_chocolate_and_strawberry_flavour.jpg"
    },
    {
        "name": "Dacquoise",
        "country": "France",
        "description": "A cake typically made with almond and hazelnut meringue.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Eggnog_mousse_cake_with_almond_dacquoise.jpg/600px-Eggnog_mousse_cake_with_almond_dacquoise.jpg"
    },
    {
        "name": "Dadar gulung",
        "country": "Indonesia",
        "description": "A traditional coconut pancake filled with grated coconut and palm sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Indonesian_Food%2C_Dadar_Gulung_Cake.jpg/600px-Indonesian_Food%2C_Dadar_Gulung_Cake.jpg"
    },
    {
        "name": "Date and walnut loaf",
        "country": "United Kingdom",
        "description": "A sweet bread made with dates, walnuts, treacle, and tea.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Date_and_walnut_bread.jpg/600px-Date_and_walnut_bread.jpg"
    },
    {
        "name": "Date square",
        "country": "Canada",
        "description": "A dessert formed from a layer of minced dates with oat crumble; it's also known as matrimonial cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Date_squares_bowl.jpg/600px-Date_squares_bowl.jpg"
    },
    {
        "name": "Depression cake",
        "country": "United States",
        "description": "A cake made without milk, sugar, butter, or eggs.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Depression_Cake.JPG/600px-Depression_Cake.JPG"
    },
    {
        "name": "Devil's food cake",
        "country": "United States",
        "description": "A dark, heavy chocolate layer cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Devil%27s_Food_Cake.jpg/600px-Devil%27s_Food_Cake.jpg"
    },
    {
        "name": "Dirt cake",
        "country": "United States",
        "description": "A cake made of pudding, crushed chocolate cookies such as Oreos, and gummy worms.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Gummy_worm_dirt_cake.jpg/600px-Gummy_worm_dirt_cake.jpg"
    },
    {
        "name": "Doberge cake",
        "country": "New Orleans, United States",
        "description": "A layered cake with custard filling adapted by local baker Beulah Ledner from the Hungarian Dobos torte.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Doberge_cake_slices.JPG/600px-Doberge_cake_slices.JPG"
    },
    {
        "name": "Dobos cake",
        "country": "Hungary",
        "description": "A sponge cake layered with chocolate buttercream and topped with thin caramel slices.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Dobos_cake_%28Gerbeaud_Confectionery_Budapest_Hungary%29.jpg/600px-Dobos_cake_%28Gerbeaud_Confectionery_Budapest_Hungary%29.jpg"
    },
    {
        "name": "Dundee cake",
        "country": "Scotland",
        "description": "A fruit cake without glacé cherries topped with almonds.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/North_British_Dundee_cake.JPG/600px-North_British_Dundee_cake.JPG"
    },
    {
        "name": "Dutch carnival cake",
        "country": "Netherlands",
        "description": "A traditional Dutch delicacy similar to gingerbread cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Tielsche_kermiskoek.jpg/600px-Tielsche_kermiskoek.jpg"
    },
    {
        "name": "Eccles cake",
        "country": "United Kingdom",
        "description": "A pastry filled with currants.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eccles_cakes.jpg/600px-Eccles_cakes.jpg"
    },
    {
        "name": "Eierschecke",
        "country": "Saxony and Thuringia",
        "description": "A sheet cake made of yeast dough topped with apple, quark curd, and poppy seeds; parts of it are covered with a glaze made of cream, whole egg, sugar, and flour.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Dresdner_Eierschecke_9.jpg/600px-Dresdner_Eierschecke_9.jpg"
    },
    {
        "name": "Erotic cake[11]",
        "country": "Unknown",
        "description": "A cake made to resemble or decorated with the image of a human body (often nude or semi-nude), individual sex organs, or sexual activities, sometimes with a statement of a sexual nature written on it",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/CakeGaga8Serbia.jpg/600px-CakeGaga8Serbia.jpg"
    },
    {
        "name": "Esterházy torte",
        "country": "Hungary\nAustria",
        "description": "A Hungarian cake (torta) named after Prince Paul III Anton Esterházy de Galántha (1786–1866). It was invented by Budapest confectioners in the late 19th century. It consists of cognac or vanilla buttercream, sandwiched between layers of almond meringue (macaroon) dough. The torte is iced with a fondant glaze and decorated with a characteristic chocolate striped pattern.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Eszterh%C3%A1zy_Torte.JPG/600px-Eszterh%C3%A1zy_Torte.JPG"
    },
    {
        "name": "Falculelle",
        "country": "Corsica",
        "description": "A small cake of brocciu cheese baked on a chestnut leaf.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Falculella_6.JPG/600px-Falculella_6.JPG"
    },
    {
        "name": "Fanta cake (Fantakuchen)",
        "country": "Germany",
        "description": "A sponge cake made using Fanta or sparkling mineral water.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Fanta-kaka_%2802%29.jpg/600px-Fanta-kaka_%2802%29.jpg"
    },
    {
        "name": "Fat rascal",
        "country": "United Kingdom",
        "description": "A pastry made from dried fruit, candied peel, and oats.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Fat_Rascal_cookies_%28cropped%29.jpg/600px-Fat_Rascal_cookies_%28cropped%29.jpg"
    },
    {
        "name": "Faworki",
        "country": "Poland",
        "description": "A sweet crisp cake in the shape of a bow.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Faworki_%28plate%29.jpg/600px-Faworki_%28plate%29.jpg"
    },
    {
        "name": "Fig cake",
        "country": "Egypt",
        "description": "A cake prepared with fig as a primary ingredient.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Fig_Skillet_Cake_%2814430102033%29.jpg/600px-Fig_Skillet_Cake_%2814430102033%29.jpg"
    },
    {
        "name": "Financier",
        "country": "France",
        "description": "A small molded almond flour and beurre noisette cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Two_rectangular_financiers.jpg/600px-Two_rectangular_financiers.jpg"
    },
    {
        "name": "Flan cake",
        "country": "Philippines",
        "description": "A chiffon or sponge cake baked with a layer of leche flan (crème caramel) on top and drizzled with caramel syrup.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Leche_flan_cake_%28Philippines%29_3.jpg/600px-Leche_flan_cake_%28Philippines%29_3.jpg"
    },
    {
        "name": "Flourless chocolate cake",
        "country": "United States",
        "description": "A dense, gluten-free cake prepared with chocolate.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flourless_Chocolate_Cake_with_Bourbon_Vanilla_Ice_Cream.jpg/600px-Flourless_Chocolate_Cake_with_Bourbon_Vanilla_Ice_Cream.jpg"
    },
    {
        "name": "Fondant Fancy",
        "country": "United Kingdom",
        "description": "A small sponge cake topped with fondant icing.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Mr_Kipling_french_fancy_%2814142526369%29.jpg/600px-Mr_Kipling_french_fancy_%2814142526369%29.jpg"
    },
    {
        "name": "Fragelité[12]",
        "country": "Denmark[12]",
        "description": "A cake made with meringue, almonds, butter, and coffee.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Konditor_kager_1.JPG/600px-Konditor_kager_1.JPG"
    },
    {
        "name": "Frankfurter Kranz (Frankfurt Crown Cake)",
        "country": "Germany",
        "description": "A sponge cake filled with buttercream icing and red jam (typically strawberry, blackcurrant or cherry); it is then topped with brittle nuts, toasted almond flakes and/or ground hazelnuts.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Frankfurter_Kranz.JPG/600px-Frankfurter_Kranz.JPG"
    },
    {
        "name": "Frog cake",
        "country": "Australia",
        "description": "A sponge cake decorated with cream and fondant so that it looks like a frog's head",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Frog_cakes.jpg/600px-Frog_cakes.jpg"
    },
    {
        "name": "Fruitcake",
        "country": "Ancient Rome",
        "description": "A rich cake with candied fruit and spices; many versions of the cake contain currants, sultanas, and glacé cherries.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Traditional_English_Fruitcake.jpg/600px-Traditional_English_Fruitcake.jpg"
    },
    {
        "name": "Fudge cake",
        "country": "",
        "description": "A chocolate cake containing fudge.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chocolate_fudge_cake_%288768339071%29.jpg/600px-Chocolate_fudge_cake_%288768339071%29.jpg"
    },
    {
        "name": "Funnel cake",
        "country": "United States",
        "description": "A choux pastry with powdered sugar or other toppings, usually fruit.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oregon_State_Fair_funnel_cake.jpg/600px-Oregon_State_Fair_funnel_cake.jpg"
    },
    {
        "name": "Garash cake",
        "country": "Bulgaria",
        "description": "A chocolate cake made with walnuts, egg whites, and powdered sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Garash.jpg/600px-Garash.jpg"
    },
    {
        "name": "Gâteau magique",
        "country": "France",
        "description": "A cake with distinctive layers of custard, cream, and sponge that form while baking.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/G%C3%A2teau_magique.jpg/600px-G%C3%A2teau_magique.jpg"
    },
    {
        "name": "Gâteau nantais",
        "country": "Nantes\nFrance",
        "description": "A pound cake with almonds and rum.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/G%C3%82TEAU_NANTAIS.jpg/600px-G%C3%82TEAU_NANTAIS.jpg"
    },
    {
        "name": "Genoa cake",
        "country": "Genoa",
        "description": "A cake made with sultanas, raisins, and glacé cherries.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Genoa-cake.jpg/600px-Genoa-cake.jpg"
    },
    {
        "name": "Genoise (Genoese cake)",
        "country": "Genoa",
        "description": "A sponge cake made with a whole egg.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/G%C3%A9noise_cake_with_buttercream_frosting.jpg/600px-G%C3%A9noise_cake_with_buttercream_frosting.jpg"
    },
    {
        "name": "German Chocolate Cake",
        "country": "United States",
        "description": "A chocolate cake with a coconut-pecan filling and chocolate frosting.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/GermanChocolateCake.jpg/600px-GermanChocolateCake.jpg"
    },
    {
        "name": "Ghevar",
        "country": "India",
        "description": "A disc-shaped cake made from flour and ghee, soaked in sugar syrup, and topped with saffron, spices, and nuts.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/GhevarRajasthaniSweet.jpg/600px-GhevarRajasthaniSweet.jpg"
    },
    {
        "name": "Gingerbread",
        "country": "United Kingdom",
        "description": "A cake typically flavored with spices such as ginger, cloves, cinnamon, and nutmeg.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cakegingerbread.jpg/600px-Cakegingerbread.jpg"
    },
    {
        "name": "Gooey butter cake",
        "country": "United States",
        "description": "A flat, dense cake made with butter and frequently topped with powdered sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Gooey_Pumpkin_Butter_Cake.jpg/600px-Gooey_Pumpkin_Butter_Cake.jpg"
    },
    {
        "name": "Goose breast (Gåsebryst)[14]",
        "country": "Denmark[14]",
        "description": "A cream cake known as Gåsebryst in Denmark.[14] It consists of a Danish pastry bottom that is topped with whipped cream, custard, and jam. These layers are then wrapped in marzipan.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flickr_-_cyclonebill_-_G%C3%A5sebryst.jpg/600px-Flickr_-_cyclonebill_-_G%C3%A5sebryst.jpg"
    },
    {
        "name": "Gorgon cake",
        "country": "China",
        "description": "A sweet and chewy cake made using gorgon fruit seeds.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/%E8%8A%A1%E5%AE%9E%E7%B3%95.jpg/600px-%E8%8A%A1%E5%AE%9E%E7%B3%95.jpg"
    },
    {
        "name": "Halloween cake",
        "country": "United States",
        "description": "A cake prepared with Halloween-themed decorations",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Halloween_pumpkin_cake_2015.JPG/600px-Halloween_pumpkin_cake_2015.JPG"
    },
    {
        "name": "Hash brownies",
        "country": "Netherlands\nBelgium",
        "description": "Also known as \"space cakes\", these are bakery products made using one of the forms of cannabis, including hashish.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Three_space_brownies.jpg/600px-Three_space_brownies.jpg"
    },
    {
        "name": "Hedgehog Slice",
        "country": "Germany",
        "description": "A cake containing crushed biscuits or rice puffs.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kalter_hund.jpg/600px-Kalter_hund.jpg"
    },
    {
        "name": "Hevva cake",
        "country": "Cornwall, England",
        "description": "A heavy cake containing raisins.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Welsh_hewa_cakes.jpg/600px-Welsh_hewa_cakes.jpg"
    },
    {
        "name": "Hot milk cake[15]",
        "country": "United States",
        "description": "A butter sponge cake made with scalded milk.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Hot_milk_cake01.jpg/600px-Hot_milk_cake01.jpg"
    },
    {
        "name": "Hummingbird cake",
        "country": "Jamaica",
        "description": "A cake made with bananas, pineapples, pecans, vanilla, and various spices.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hummingbird_cake_-_homemade.jpg/600px-Hummingbird_cake_-_homemade.jpg"
    },
    {
        "name": "Ice cream cake",
        "country": "Unknown",
        "description": "A cake with at least one layer of ice cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Culinique_Ice_Cream_Cake.jpg/600px-Culinique_Ice_Cream_Cake.jpg"
    },
    {
        "name": "Jaffa Cakes",
        "country": "United Kingdom",
        "description": "A biscuit-sized cake introduced by McVitie and Price in 1927 and named after Jaffa oranges. The most common forms of Jaffa Cakes are circular, 2.5 inches (64 mm) in diameter and have three layers: a Genoise sponge base, a layer of orange flavored jelly, and a coating of chocolate.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Jaffa_cake.jpg/600px-Jaffa_cake.jpg"
    },
    {
        "name": "Jajan pasar",
        "country": "Java, Indonesia",
        "description": "Traditional Javanese cakes sold in Javanese markets.[16]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Jajan_Pasar_in_Jakarta.JPG/600px-Jajan_Pasar_in_Jakarta.JPG"
    },
    {
        "name": "Joffre cake",
        "country": "Romania",
        "description": "A chocolate buttermilk layer cake filled with chocolate ganache.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/A_part_of_Joffre.JPG/600px-A_part_of_Joffre.JPG"
    },
    {
        "name": "Cardinal slice",
        "country": "Austria",
        "description": "A classic layered Viennese desert consisting of a sponge cake layer and meringue and filled with red currant jam. The colors of the layers, white and yellow, are meant to represent the colors of the Vatikan.[18]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/19-01-26-Kardinalschnitte-RalfR-IMG_20190126_135105_225.jpg/600px-19-01-26-Kardinalschnitte-RalfR-IMG_20190126_135105_225.jpg"
    },
    {
        "name": "Khanom farang kudi chin",
        "country": "Thailand",
        "description": "A cake topped with raisins, dried sweet gourds, and white sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Kudi_Chin_snack_%28002%29.jpg/600px-Kudi_Chin_snack_%28002%29.jpg"
    },
    {
        "name": "King cake",
        "country": "France\nSpain",
        "description": "A cake associated with Epiphany in many countries; its ingredients vary, but traditionally there is a fève hidden inside.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kingcake.jpg/600px-Kingcake.jpg"
    },
    {
        "name": "Kladdkaka",
        "country": "Sweden",
        "description": "A dense Swedish chocolate cake lacking baking powder.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kaffereptarta.jpg/600px-Kaffereptarta.jpg"
    },
    {
        "name": "Klepon",
        "country": "Indonesia",
        "description": "A dessert formed from traditional green-colored balls of rice cake filled with liquid palm sugar and coated in grated coconut.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Onde-onde.jpg/600px-Onde-onde.jpg"
    },
    {
        "name": "Kliņģeris[19]",
        "country": "Latvia[19]",
        "description": "A type of pretzel-shaped pastry.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kringle_2.JPG/600px-Kringle_2.JPG"
    },
    {
        "name": "Kołacz",
        "country": "Poland",
        "description": "A ceremonial sweet bread that may have fillings such as cheese or dried plum.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ko%C5%82acz.JPG/600px-Ko%C5%82acz.JPG"
    },
    {
        "name": "Kouign-amann",
        "country": "Brittany",
        "description": "A sweet cake made with laminated dough.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kouignamann.JPG/600px-Kouignamann.JPG"
    },
    {
        "name": "Kransekake",
        "country": "Denmark\nNorway",
        "description": "A layered ring cake made from almonds, sugar, and egg whites.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Kransakaka.jpg/600px-Kransakaka.jpg"
    },
    {
        "name": "Krantz cake",
        "country": "Israel,[20][21] Ashkenazi Jewish cuisine",
        "description": "A yeasted cake with a chocolate or poppy seed filling.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Kranz_cake2.jpg/600px-Kranz_cake2.jpg"
    },
    {
        "name": "Kremówka",
        "country": "Germany, Slovakia",
        "description": "A Polish type of cream pie. It is made of two layers of puff pastry, filled with whipped cream, creamy buttercream, custard cream, or egg white cream; it is usually sprinkled with powdered sugar, but it also can be decorated with cream or covered with a layer of icing.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Napoleon_cake_02.JPG/600px-Napoleon_cake_02.JPG"
    },
    {
        "name": "Kue cubit",
        "country": "Indonesia",
        "description": "A small cake eaten as a snack.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Kue_cubit.jpg/600px-Kue_cubit.jpg"
    },
    {
        "name": "Kue lapis",
        "country": "Indonesia",
        "description": "A traditional cake of colorful layered soft rice flour pudding.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Kue_Lapis.jpg/600px-Kue_Lapis.jpg"
    },
    {
        "name": "Kue mangkok",
        "country": "Indonesia",
        "description": "A traditional steamed cupcake. The ingredients include flour, rice flour, tapioca, yeast, eggs, coconut milk, sugar and salt.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/KUE_MANGKUK_TELO.JPG/600px-KUE_MANGKUK_TELO.JPG"
    },
    {
        "name": "Kutia",
        "country": "Poland\nBelarus\nUkraine\nLithuania\nRussia",
        "description": "A ceremonial grain dish that can include nuts and raisins.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kutia_Natalii.jpg/600px-Kutia_Natalii.jpg"
    },
    {
        "name": "Kyiv cake",
        "country": "Ukraine",
        "description": "A cake composed of two airy layers of meringue filled with hazelnuts, chocolate glaze, and buttercream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%82%D0%BE%D1%80%D1%82_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B8.JPG/600px-%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%82%D0%BE%D1%80%D1%82_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B8.JPG"
    },
    {
        "name": "Lady Baltimore cake",
        "country": "Southern United States",
        "description": "A white layer cake filled with fruits and nuts and covered with a fluffy frosting.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lady_baltimore_cake_%288326511799%29.jpg/600px-Lady_baltimore_cake_%288326511799%29.jpg"
    },
    {
        "name": "Lamington",
        "country": "Australia",
        "description": "A dessert made with squares of cake covered with chocolate sauce and desiccated coconut.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mocha_Flake_amingtons.jpg/600px-Mocha_Flake_amingtons.jpg"
    },
    {
        "name": "Lane cake",
        "country": "United States",
        "description": "A bourbon-laced cake with a fruit and nut filling.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Slice_of_lane_cake.jpg/600px-Slice_of_lane_cake.jpg"
    },
    {
        "name": "Lardy cake",
        "country": "England",
        "description": "A traditional rich spiced form of bread made with freshly rendered lard, flour, sugar, spices, currants and raisins",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lardy_cake_from_The_Indulgent_Baker%2C_Caversham%2C_UK_-_20150711.jpg/600px-Lardy_cake_from_The_Indulgent_Baker%2C_Caversham%2C_UK_-_20150711.jpg"
    },
    {
        "name": "Layer cake",
        "country": "Unknown",
        "description": "A category of dessert that involves stacked layers of cake held together by some type of filling.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Meyer_lemon_chiffon_cake%2C_chocolate.jpg/600px-Meyer_lemon_chiffon_cake%2C_chocolate.jpg"
    },
    {
        "name": "Lekach",
        "country": "Ancient Egypt, Rome and the Middle East, Germany",
        "description": "Honey-sweetened cake made by Jews, especially for the Jewish holiday of Rosh Hashanah.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Honey_Cake.jpg/600px-Honey_Cake.jpg"
    },
    {
        "name": "Lemon cake",
        "country": "Unknown, but likely England[22]",
        "description": "A cake with a lemon flavor.[23][24]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Slice_of_Lemon_Cake.jpg/600px-Slice_of_Lemon_Cake.jpg"
    },
    {
        "name": "Linzer Torte",
        "country": "Austria",
        "description": "A thick layer of cinnamon and clove spiced shortcrust topped with red currant jam and a lattice design of dough strips.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Foto.Linzertorte.JPG/600px-Foto.Linzertorte.JPG"
    },
    {
        "name": "Lolly cake",
        "country": "New Zealand",
        "description": "A log-shaped cake made from malt biscuits, butter, sweetened condensed milk and fruit puffs, usually rolled in coconut.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Lolly_cake_%282792116118%29.jpg/600px-Lolly_cake_%282792116118%29.jpg"
    },
    {
        "name": "Madeira cake",
        "country": "United Kingdom",
        "description": "A light butter cake usually flavored with lemon. Sometimes confused with Bolo de mel cakes, which are actually made in Madeira using a completely different recipe.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cherry_madeira_cake.jpg/600px-Cherry_madeira_cake.jpg"
    },
    {
        "name": "Madeleine",
        "country": "Lorraine",
        "description": "A small shell-shaped sponge cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Madeleines_de_Commercy.jpg/600px-Madeleines_de_Commercy.jpg"
    },
    {
        "name": "Magdalena",
        "country": "Spain",
        "description": "A Spanish muffin or cupcake variation, typically flavored with lemon.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Madalenas_caseras-Madrid.jpg/600px-Madalenas_caseras-Madrid.jpg"
    },
    {
        "name": "Makowiec",
        "country": "Poland",
        "description": "A poppy seed cake normally decorated with icing and orange zest.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bejgli1.jpg/600px-Bejgli1.jpg"
    },
    {
        "name": "Mané pelado",
        "country": "Brazil",
        "description": "A creamy cake made of yuca, coconut, and cheese.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Man%C3%A9_pelado_cake.jpg/600px-Man%C3%A9_pelado_cake.jpg"
    },
    {
        "name": "Mango cake",
        "country": "Philippines",
        "description": "A chiffon cake or roll topped with mango cream frosting and fresh Carabao mango slices.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Mango_Passion_cake_%28Red_Ribbon%2C_Philippines%29.jpg/600px-Mango_Passion_cake_%28Red_Ribbon%2C_Philippines%29.jpg"
    },
    {
        "name": "Mango float",
        "country": "Philippines",
        "description": "A dessert similar to tiramisu made with layers of broas or graham crackers, whipped cream, condensed milk, and ripe Carabao mangos (other fruits can also be used). It is a no-bake version of the crema de fruta.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Mango_float_%28Crema_de_Mangga%29_-_Philippines.jpg/600px-Mango_float_%28Crema_de_Mangga%29_-_Philippines.jpg"
    },
    {
        "name": "Mantecada",
        "country": "Spain",
        "description": "A square, spongy pastry.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Mantecadas_de_Tuesta-Valdegov%C3%ADa8.JPG/600px-Mantecadas_de_Tuesta-Valdegov%C3%ADa8.JPG"
    },
    {
        "name": "Marble cake",
        "country": "Germany",
        "description": "A vanilla, coffee, or chocolate butter cake wherein two differently colored batters are swirled together to show a marble-like pattern.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Marmorkuchen.jpg/600px-Marmorkuchen.jpg"
    },
    {
        "name": "Mazurek",
        "country": "Poland",
        "description": "An Easter cake with a short pastry base and various toppings.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/91365_Mazurek.jpg/600px-91365_Mazurek.jpg"
    },
    {
        "name": "Medivnyk",
        "country": "Ukraine",
        "description": "Ukrainian honey cake containing buckwheat honey, wheat flour and spices.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Medivnyk_-_2.jpg/600px-Medivnyk_-_2.jpg"
    },
    {
        "name": "Medovik",
        "country": "Russia",
        "description": "A layer cake popular in Russia and other countries of the former Soviet Union, often referred to as a Russian honey cake. The identifying ingredients are honey and smetana or condensed milk.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Medovik.jpg/600px-Medovik.jpg"
    },
    {
        "name": "Merveilleux",
        "country": "Belgium",
        "description": "Two light meringues welded and covered with whipped cream and dusted with chocolate shavings.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Merveilleux.jpg/600px-Merveilleux.jpg"
    },
    {
        "name": "Mikado cake",
        "country": "Armenia",
        "description": "Armenian cake originating in the USSR, prepared with the boiled condensed milk or dulce de leche.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mikado_cake.png/600px-Mikado_cake.png"
    },
    {
        "name": "Mille-feuille",
        "country": "France",
        "description": "A cake consisting of three layers of puff pastry alternating with two layers of pastry cream. The top is glazed in white (icing) and brown (chocolate) strips, and combed into a distinctive pattern. This cake is also known as a Napoleon.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mille-feuille_fran%C3%A7ais_1.jpg/600px-Mille-feuille_fran%C3%A7ais_1.jpg"
    },
    {
        "name": "Mimosa cake",
        "country": "Italy",
        "description": "First created in Rieti in the 1950s,[25] the name comes from the small pieces of sponge cake scattered on the surface, which resemble mimosa flowers in shape.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Le_nostre_torte_%288937128050%29.jpg/600px-Le_nostre_torte_%288937128050%29.jpg"
    },
    {
        "name": "Misérable cake",
        "country": "Belgium",
        "description": "A traditional Belgian almond sponge cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Miserablecake.jpg/600px-Miserablecake.jpg"
    },
    {
        "name": "Molten chocolate cake",
        "country": "France",
        "description": "A popular dessert that combines the elements of a flourless chocolate cake and a soufflé. It is also known as a lava cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Chocolate_Fondant.jpg/600px-Chocolate_Fondant.jpg"
    },
    {
        "name": "Mooncake",
        "country": "China",
        "description": "A Chinese bakery product traditionally eaten during the Mid-Autumn Festival.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Mooncake1.jpg/600px-Mooncake1.jpg"
    },
    {
        "name": "Moravian sugar cake",
        "country": "Pennsylvania German Country /United States",
        "description": "A sweet coffee cake that originated in the colonial Moravian Church. It is made with a sweet yeast dough enriched with mashed potatoes and topped with a mixture of melted butter, brown sugar, and cinnamon.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sugar_Cake.jpg/600px-Sugar_Cake.jpg"
    },
    {
        "name": "Napoleonskake [da; no; sv][26][self-published source]",
        "country": "Nordic countries",
        "description": "A cake that is similar to tompouce, with different flavors like caramel or carob.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/TortNapoleon%28kuski%29.jpg/600px-TortNapoleon%28kuski%29.jpg"
    },
    {
        "name": "Napoleonshat [da][27]",
        "country": "Denmark",
        "description": "A marzipan based cake shaped like a Napoleon's Hat and dipped in dark chocolate.[27]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Napoleonshat.jpg/600px-Napoleonshat.jpg"
    },
    {
        "name": "Nonnette",
        "country": "France",
        "description": "A small gingerbread cake with honey and orange marmalade.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nonnette.jpg/600px-Nonnette.jpg"
    },
    {
        "name": "Onion cake",
        "country": "East Asia, Central Asia & Southeast Asia",
        "description": "A savory or sweet cake prepared with onion as a primary ingredient.[28]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sugar_onion_cake_2.JPG/600px-Sugar_onion_cake_2.JPG"
    },
    {
        "name": "Opera cake",
        "country": "France",
        "description": "A dessert with layers of ganache and sponge cake soaked in coffee syrup.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tartine_bakery_opera_cake_in_2007.jpg/600px-Tartine_bakery_opera_cake_in_2007.jpg"
    },
    {
        "name": "Oponki or Pączki",
        "country": "Poland",
        "description": "A round, spongy yeast cake with a sweet topping.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Polskie_p%C4%85czki.jpg/600px-Polskie_p%C4%85czki.jpg"
    },
    {
        "name": "Ostkaka",
        "country": "Sweden",
        "description": "A Swedish cheesecake typically eaten with a jam or cordial sauce.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sm%C3%A5lands_b%C3%A4sta_ostkaka.jpg/600px-Sm%C3%A5lands_b%C3%A4sta_ostkaka.jpg"
    },
    {
        "name": "Othellolagkage[29]",
        "country": "Denmark[29]",
        "description": "A layer cake with sponge cake, cream, chocolate, raspberry, egg, vanilla, and marzipan.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Othello-lagkager.jpg/600px-Othello-lagkager.jpg"
    },
    {
        "name": "Pain d'épices",
        "country": "Reims and Alsace",
        "description": "A French quick bread containing rye flour, honey, and spices.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pain_depices_p1050128.jpg/600px-Pain_depices_p1050128.jpg"
    },
    {
        "name": "Pain de Gênes",
        "country": "Genoa",
        "description": "A cake made primarily from almond paste, eggs, and melted butter.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Pain-de-genes.jpg/600px-Pain-de-genes.jpg"
    },
    {
        "name": "Pão de Ló[30]",
        "country": "Italy[30]",
        "description": "A sponge cake traditionally made by Italian Jewish families for Passover.[31]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cake_competition_%2814287027130%29.jpg/600px-Cake_competition_%2814287027130%29.jpg"
    },
    {
        "name": "Pancake",
        "country": "United States\nCanada",
        "description": "A flat, round cake made with eggs, milk, and flour.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Blueberry_pancakes_%281%29.jpg/600px-Blueberry_pancakes_%281%29.jpg"
    },
    {
        "name": "Pandan cake",
        "country": "Malaysia\nIndonesia",
        "description": "A light, fluffy, green-colored sponge cake. The ingredients are flour, eggs, butter or margarine, sugar, and pandan leaf.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sifon_pandan.JPG/600px-Sifon_pandan.JPG"
    },
    {
        "name": "Panettone",
        "country": "Italy",
        "description": "A sweet bread containing candied citrus and raisins.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Panettone_-_Nicolettone_2017_-_IMG_7085_%2831752542285%29.jpg/600px-Panettone_-_Nicolettone_2017_-_IMG_7085_%2831752542285%29.jpg"
    },
    {
        "name": "Panpepato",
        "country": "Italy",
        "description": "A round, sweet cake filled with nuts such as almonds, hazelnuts, and pine nuts.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Panpepato_di_Terni.jpg/600px-Panpepato_di_Terni.jpg"
    },
    {
        "name": "Paris–Brest",
        "country": "France",
        "description": "A dessert made of choux pastry and praline flavored cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Paris-Brest_IMG_0875.JPG/600px-Paris-Brest_IMG_0875.JPG"
    },
    {
        "name": "Parkin",
        "country": "United Kingdom",
        "description": "A gingerbread cake made with treacle and oats.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/YorkShireParkin.jpg/600px-YorkShireParkin.jpg"
    },
    {
        "name": "Parrozzo",
        "country": "Abruzzo",
        "description": "A cake made with semolina and almond flour and then covered with dark chocolate.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Parrozzo_01.JPG/600px-Parrozzo_01.JPG"
    },
    {
        "name": "Pavlova",
        "country": "Australia\nNew Zealand",
        "description": "A cake named after Anna Pavlova and made with meringue.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Christmas_pavlova.jpg/600px-Christmas_pavlova.jpg"
    },
    {
        "name": "Petit Gâteau",
        "country": "France",
        "description": "A small chocolate cake that is usually served with ice cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Petit_g%C3%A2teau.jpg/600px-Petit_g%C3%A2teau.jpg"
    },
    {
        "name": "Petits fours",
        "country": "France",
        "description": "A French dessert made from sponge cake cut into small cubes and coated with fondant icing; the cake is sometimes filled with marzipan or jam.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Petits.fours.wmt.jpg/600px-Petits.fours.wmt.jpg"
    },
    {
        "name": "Pizza cake",
        "country": "Canada",
        "description": "A savory multi-layer cake with pizza ingredients such as tomato sauce, pepperoni, and cheese.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sliced_pizza_cake%2C_Windsor%2C_Ontario.jpg/600px-Sliced_pizza_cake%2C_Windsor%2C_Ontario.jpg"
    },
    {
        "name": "Pryanik[32]",
        "country": "Poland[32]",
        "description": "A type of gingerbread spiced with cinnamon, ginger, cloves and cardamom.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Piernik_Orlen%2C_Lopienno.JPG/600px-Piernik_Orlen%2C_Lopienno.JPG"
    },
    {
        "name": "Piñata Smash Cake",
        "country": "Mexico[33]",
        "description": "A sponge cake with a candy and cream filling that is smashed open in a manner similar to a piñata.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pinata_Smash_Cake.jpg/600px-Pinata_Smash_Cake.jpg"
    },
    {
        "name": "Pineapple cake",
        "country": "Taiwan",
        "description": "A Taiwanese sweet traditional pastry containing butter, flour, eggs, sugar, and pineapple jam or slices.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pineapple_Pastry.JPG/600px-Pineapple_Pastry.JPG"
    },
    {
        "name": "Plum cake",
        "country": "England",
        "description": "The name plum cake has referred to fruitcake prepared with dried plum and spices in England since around 1700; today, it refers to a cake prepared with dried fruits (such as raisins) as the primary ingredients.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Plum_cake_08_ies.jpg/600px-Plum_cake_08_ies.jpg"
    },
    {
        "name": "Poffertjes",
        "country": "Netherlands\nBelgium\nLuxembourg\nGermany\nSwitzerland\nAustria",
        "description": "A traditional batter treat made with yeast and buckwheat flour that resembles small, fluffy pancakes.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Poffertjes-Melkhuis_%28cropped%29.jpg/600px-Poffertjes-Melkhuis_%28cropped%29.jpg"
    },
    {
        "name": "Pound cake",
        "country": "United Kingdom",
        "description": "A cake traditionally made with a pound each of its four main ingredients (flour, butter, eggs, and sugar); today, ingredient proportions vary.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/600px-Pound_layer_cake.jpg"
    },
    {
        "name": "Princess cake",
        "country": "Sweden",
        "description": "A cake with alternating layers of sponge cake and whipped cream followed a layer of fresh raspberries and a layer of custard; all these layers are topped with a layer of marzipan.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Prinsesst%C3%A5rta.JPG/600px-Prinsesst%C3%A5rta.JPG"
    },
    {
        "name": "Prinzregententorte",
        "country": "Germany",
        "description": "A torte consisting of at least six thin layers of sponge cake layered with chocolate buttercream and covered in dark chocolate glaze.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Prinzregententorte.jpg/600px-Prinzregententorte.jpg"
    },
    {
        "name": "Punschkrapfen",
        "country": "Austria",
        "description": "A dessert with a base of either cake crumbs or sponge cake that is then filled with nougat and jam and soaked with rum. It is covered with a thick rum sugar glaze and topped with chocolate and/or a cocktail cherry.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Punschkrapfen.jpg/600px-Punschkrapfen.jpg"
    },
    {
        "name": "Puto",
        "country": "Philippines",
        "description": "A dish consisting of steamed rice cakes, traditionally made from slightly fermented rice dough. They are eaten as is or as an accompaniment to a number of savory dishes.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Puto_in_banana_leaf.jpg/600px-Puto_in_banana_leaf.jpg"
    },
    {
        "name": "Putu",
        "country": "Indonesia",
        "description": "A traditional cylindrical-shaped and green-colored steamed cake. The cake is made of rice flour called suji and that is colored green with pandan extract, filled with palm sugar, steamed in bamboo tubes, and served with grated coconut.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Kue_putu.jpg/600px-Kue_putu.jpg"
    },
    {
        "name": "Queen cake",
        "country": "United Kingdom",
        "description": "A soft, muffin-sized cake that gained popularity around the early 18th century; it contains currants and is flavored with mace and orange or lemon water.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Queen_cakes_cooling_on_a_wire_rack_%2813475333725%29.jpg/600px-Queen_cakes_cooling_on_a_wire_rack_%2813475333725%29.jpg"
    },
    {
        "name": "Raisin cake",
        "country": "Germany",
        "description": "A cake prepared with raisins as a primary ingredient.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Teekuchen%2C_Miltenberg%2C_Germany.JPG/600px-Teekuchen%2C_Miltenberg%2C_Germany.JPG"
    },
    {
        "name": "Randalín",
        "country": "Iceland",
        "description": "A multi-layered cake made from almond or cardamom biscuit and plum jam.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/V%C3%ADnarterta.JPG/600px-V%C3%ADnarterta.JPG"
    },
    {
        "name": "Red bean cake",
        "country": "Japan\nChina",
        "description": "A cake made with hardened red bean paste.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/RedbeanCake_Cantoversion.jpg/600px-RedbeanCake_Cantoversion.jpg"
    },
    {
        "name": "Red velvet cake",
        "country": "United States",
        "description": "A soft chocolate cake that is colored red and topped with cream cheese icing.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_velvet_cake_slice.jpg/600px-Red_velvet_cake_slice.jpg"
    },
    {
        "name": "Rock cake",
        "country": "United Kingdom",
        "description": "A small, rough cake that typically includes flavorings such as currants and candied peel.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Golden-Krust-Rock-Cake.jpg/600px-Golden-Krust-Rock-Cake.jpg"
    },
    {
        "name": "Rum baba",
        "country": "France, Italy",
        "description": "A small yeast cake soaked with rum and sometimes filled with cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/BabaRum.jpg/600px-BabaRum.jpg"
    },
    {
        "name": "Rum cake",
        "country": "Jamaica, Trinidad and Tobago",
        "description": "A cake that traditionally contains dried fruit soaked in rum.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Rum_cake.jpg/600px-Rum_cake.jpg"
    },
    {
        "name": "Ruske kape",
        "country": "Bosnia\nSerbia",
        "description": "A dessert consisting of alternating layers of vanilla and chocolate cake; this base is then topped with chocolate and decorated with coconut at the edges.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/RuskeKapa.jpg/600px-RuskeKapa.jpg"
    },
    {
        "name": "Sachertorte",
        "country": "Austria",
        "description": "A sweet chocolate butter cake that is filled with apricot jam and frosted with chocolate fondant icing; it is traditionally served with whipped cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sachertorte_DSC03027_retouched.jpg/600px-Sachertorte_DSC03027_retouched.jpg"
    },
    {
        "name": "Sachima",
        "country": "China",
        "description": "A pastry composed of strands of fried batter held together by sugar syrup.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Sacima.jpg/600px-Sacima.jpg"
    },
    {
        "name": "Šakotis / Sękacz",
        "country": "Lithuania\nPoland",
        "description": "A traditional cake created by painting layers of dough onto a spit rotating over an open fire.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%C5%A0akotis_3799.jpg/600px-%C5%A0akotis_3799.jpg"
    },
    {
        "name": "Sans rival",
        "country": "Philippines",
        "description": "A cake composed of layers of buttercream, meringue, and chopped cashews.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sans_rival_slice.JPG/600px-Sans_rival_slice.JPG"
    },
    {
        "name": "Santiago cake",
        "country": "Galicia",
        "description": "An almond cake topped with a Santiago cross design in powdered sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tarta_de_Santiago-2009.jpg/600px-Tarta_de_Santiago-2009.jpg"
    },
    {
        "name": "Serabi",
        "country": "Indonesia",
        "description": "A traditional pancake that is made from rice flour with coconut milk or shredded coconut as an emulsifier and eaten with thick golden-brown coconut sugar syrup.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Serabi_kuno_dan_alat_masaknya.jpg/600px-Serabi_kuno_dan_alat_masaknya.jpg"
    },
    {
        "name": "Sernik",
        "country": "Poland",
        "description": "A Polish cheesecake made with twaróg.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/2023_Sernik_polski_%281%29.jpg/600px-2023_Sernik_polski_%281%29.jpg"
    },
    {
        "name": "Sesame seed cake",
        "country": "United States, Asia",
        "description": "A cake made of sesame seeds, often with honey as a sweetener.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sesame_seed_cakes.jpg/600px-Sesame_seed_cakes.jpg"
    },
    {
        "name": "Sfouf",
        "country": "Lebanon",
        "description": "An almond-semolina cake flavored with turmeric, sesame paste, anise, and pine nuts.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sfoufs_%288280943024%29_%28cropped%29.jpg/600px-Sfoufs_%288280943024%29_%28cropped%29.jpg"
    },
    {
        "name": "Sheet cake",
        "country": "United States",
        "description": "A cake baked in a large, flat rectangular pan, such as a sheet or jelly roll pan.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sheet_cake.jpg/600px-Sheet_cake.jpg"
    },
    {
        "name": "Simnel cake",
        "country": "United Kingdom",
        "description": "A layered fruitcake that includes marzipan.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Decorated_Simnel_cake_%2814173161143%29.jpg/600px-Decorated_Simnel_cake_%2814173161143%29.jpg"
    },
    {
        "name": "Smith Island Cake",
        "country": "United States",
        "description": "A dessert consisting of 8 to 15 thin layers of cake alternating with chocolate buttercream; condensed or evaporated milk is commonly used.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Smith_island_cake2009.jpg/600px-Smith_island_cake2009.jpg"
    },
    {
        "name": "Smörgåstårta",
        "country": "Nordic countries",
        "description": "A Scandinavian \"sandwich cake\" with ingredients similar to a sandwich and a large enough amount of filling to make it resemble a layered cream cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Voileip%C3%A4kakku.jpg/600px-Voileip%C3%A4kakku.jpg"
    },
    {
        "name": "Snow skin mooncake",
        "country": "Hong Kong",
        "description": "A type of mooncake eaten during the Mid-Autumn Festival that was developed by a bakery in Hong Kong as an alternative to traditional mooncakes, which are made with ingredients such as salted duck egg yolks and lotus seed paste that result in a high level of sugar and oil.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/SnowSkinMooncake2.jpg/600px-SnowSkinMooncake2.jpg"
    },
    {
        "name": "Snowball cake",
        "country": "United States",
        "description": "A chocolate cake covered with marshmallow frosting and coconut flakes.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hostess-Sno-Ball-WS.jpg/600px-Hostess-Sno-Ball-WS.jpg"
    },
    {
        "name": "Soufflé",
        "country": "France",
        "description": "Fluffy cakes that are traditionally served in the ramekins they were baked in and consist mostly of beaten eggs and sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Choco_souffle.jpg/600px-Choco_souffle.jpg"
    },
    {
        "name": "Spekkoek",
        "country": "Indonesia",
        "description": "A multi-layered cake containing cinnamon, clove, mace, and anise.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Spekkoek_naturel_en_pandan.jpg/600px-Spekkoek_naturel_en_pandan.jpg"
    },
    {
        "name": "Spettekaka",
        "country": "Scania and Halland",
        "description": "A Swedish variation on a spit cake made from potato flour.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Spettekaka_cake._Taken_at_70th_birthday_party_in_Osby%2C_Sweden.jpg/600px-Spettekaka_cake._Taken_at_70th_birthday_party_in_Osby%2C_Sweden.jpg"
    },
    {
        "name": "Spice cake",
        "country": "North America",
        "description": "A cake flavored with spices such as cinnamon, cloves, allspice, ginger, or mace.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Spice_Cake_with_sea_foam_frosting.jpg/600px-Spice_Cake_with_sea_foam_frosting.jpg"
    },
    {
        "name": "Spiku",
        "country": "Indonesia",
        "description": "A cake with similar ingredients to a spekkoek that only has three layers of vanilla and chocolate cake.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kue_lapis_Surabaya.JPG/600px-Kue_lapis_Surabaya.JPG"
    },
    {
        "name": "Spit cake",
        "country": "Ancient Greece",
        "description": "A term that can refer to any number of hollow, cylindrical cakes prepared on a rotating spit in several European countries.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/K%C3%BCrt%C5%91skal%C3%A1cs_Budapest_2008.jpg/600px-K%C3%BCrt%C5%91skal%C3%A1cs_Budapest_2008.jpg"
    },
    {
        "name": "Sponge cake",
        "country": "United Kingdom",
        "description": "A light cake made with egg whites, flour, and sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cake_competition_%2814287027130%29.jpg/600px-Cake_competition_%2814287027130%29.jpg"
    },
    {
        "name": "St. Honoré cake",
        "country": "France",
        "description": "A dessert consisting of a puff pastry base, a ring of pâte à choux, sugared profiteroles, and crème chiboust filling.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Saint-honor%C3%A9_%28p%C3%A2tisserie%29.JPG/600px-Saint-honor%C3%A9_%28p%C3%A2tisserie%29.JPG"
    },
    {
        "name": "Stack cake",
        "country": "United States",
        "description": "A stack of cakes made with molasses and layered with some form of apple filling.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Apple_Stack_Cake.jpg/600px-Apple_Stack_Cake.jpg"
    },
    {
        "name": "Strawberry cake",
        "country": "United States\nCanada\nFrance",
        "description": "A cake that uses strawberry as a primary ingredient.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%28Artisan_cake%29_pic.a07.JPG/600px-%28Artisan_cake%29_pic.a07.JPG"
    },
    {
        "name": "Streuselkuchen",
        "country": "Germany",
        "description": "A yeast cake topped with streusel.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Streuselkuchen7.jpg/600px-Streuselkuchen7.jpg"
    },
    {
        "name": "Suncake",
        "country": "Taiwan",
        "description": "A popular Taiwanese dessert originally from the city of Taichung. The typical fillings consist of condensed malt sugar, and the cakes are usually sold in special gift boxes as souvenirs for visitors.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Taiwanese_Suncake_%28flickr11069409046%29.jpg/600px-Taiwanese_Suncake_%28flickr11069409046%29.jpg"
    },
    {
        "name": "Swiss roll",
        "country": "United Kingdom\nUnited States\nCanada",
        "description": "A roll cake of varying colors filled with jam or some sort of cream; despite its name, the cake was not developed in Switzerland.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sri_Lankan_Swiss_roll.jpg/600px-Sri_Lankan_Swiss_roll.jpg"
    },
    {
        "name": "Tarte Tatin",
        "country": "France",
        "description": "A dessert consisting of various fruits, such as apples or pears, that are caramelized in a pan and then topped with puff pastry and baked in the oven.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Closeup_of_tarte_tatin_%2813513714244%29.jpg/600px-Closeup_of_tarte_tatin_%2813513714244%29.jpg"
    },
    {
        "name": "Tea loaf",
        "country": "United Kingdom",
        "description": "A sweet bread containing currants and sultanas that are soaked in tea.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/027_of_366_%286783085325%29.jpg/600px-027_of_366_%286783085325%29.jpg"
    },
    {
        "name": "Teacake",
        "country": "United Kingdom",
        "description": "A baked good meant to be eaten with tea.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Teacake.jpg/600px-Teacake.jpg"
    },
    {
        "name": "Tiramisu",
        "country": "Italy",
        "description": "A dessert consisting of several layers of ladyfingers dipped in espresso and occasionally alcohol such as Marsala wine and a cream made from mascarpone, eggs, and sugar. Traditionally sprinkled with cocoa powder and served chilled.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tiramisu_Fanes.jpg/600px-Tiramisu_Fanes.jpg"
    },
    {
        "name": "Tompouce",
        "country": "Netherlands",
        "description": "A rectangular dessert made of two layers of puff pastry filled with yellow pastry cream and topped with smooth white icing.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tom_Pouce_Dutch_pastry.JPG/600px-Tom_Pouce_Dutch_pastry.JPG"
    },
    {
        "name": "Torta Barozzi",
        "country": "Italy",
        "description": "A flourless chocolate cake flavored with rum, coffee, and almonds.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Torta_Barozzi.jpg/600px-Torta_Barozzi.jpg"
    },
    {
        "name": "Torta caprese",
        "country": "Capri, Italy",
        "description": "A chocolate cake made with almonds or hazelnuts.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Torta_caprese.jpg/600px-Torta_caprese.jpg"
    },
    {
        "name": "Torta della nonna",
        "country": "Italy",
        "description": "Torta della nonna is a dessert typical of the region of Tuscany in Italy. It is a sweet pastry cake filled with vanilla-flavored custard and covered with pine nuts and confectioner's sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Torta_della_nonna.jpg/600px-Torta_della_nonna.jpg"
    },
    {
        "name": "Torta delle rose",
        "country": "Italy",
        "description": "A Mantuan and Brescian cake that is made with leavened dough rich in butter and sugar. The dough is rolled up and placed in the baking tin so that it takes the cake's characteristic shape of a basket of rosebuds, hence the name.[34]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Rose%27s_cake.JPG/600px-Rose%27s_cake.JPG"
    },
    {
        "name": "Træstammer[35]",
        "country": "Denmark",
        "description": "A log-shaped cake made from cocoa powder, sugar, butter, rum, marzipan, and chocolate.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Tr%C3%A6stammer_1.jpg/600px-Tr%C3%A6stammer_1.jpg"
    },
    {
        "name": "Tres leches cake",
        "country": "Mexico\nCosta Rica\nNicaragua\nColombia\nSpain",
        "description": "A sponge cake soaked with evaporated milk, condensed milk, and heavy or sour cream.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Tres_Leches.jpg/600px-Tres_Leches.jpg"
    },
    {
        "name": "Tunis cake",
        "country": "Scotland\nNorthern Ireland",
        "description": "A Madeira cake covered with a thick layer of chocolate and decorated with marzipan.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tunis_Cake_Cross-Section_KG_Christmas_2021.jpg/600px-Tunis_Cake_Cross-Section_KG_Christmas_2021.jpg"
    },
    {
        "name": "Twinkie",
        "country": "United States",
        "description": "Golden sponge cake with a creamy filling.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hostess_twinkies_tweaked.jpg/600px-Hostess_twinkies_tweaked.jpg"
    },
    {
        "name": "Ube cake",
        "country": "Philippines",
        "description": "A traditional Filipino chiffon cake or sponge cake made with ube halaya.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Ube_cake_%2820018687044%29.jpg/600px-Ube_cake_%2820018687044%29.jpg"
    },
    {
        "name": "Ul boov",
        "country": "Mongolia",
        "description": "A layered biscuit stamped with a unique design and served with aaruul.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mongolian_biscuit_Ul_boov_at_World_Heritage_Cuisine_Summit_%26_Food_Festival_2018.jpg/600px-Mongolian_biscuit_Ul_boov_at_World_Heritage_Cuisine_Summit_%26_Food_Festival_2018.jpg"
    },
    {
        "name": "Upside-down cake",
        "country": "United Kingdom",
        "description": "A cake baked with its toppings (usually fruit such as pineapples) at the bottom of the pan. Before serving, the cake is flipped to be right-side up.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Pineapple-upside-down-cake.jpg/600px-Pineapple-upside-down-cake.jpg"
    },
    {
        "name": "Victoria sponge cake",
        "country": "United Kingdom",
        "description": "A cake named after Queen Victoria, typically consisting of jam and whipped double cream or vanilla cream sandwiched between two sponge cakes; the top of the cake is decorated with a dusting of icing sugar.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Cake_from_WHR%28P%29.jpg/600px-Cake_from_WHR%28P%29.jpg"
    },
    {
        "name": "Wacky cake",
        "country": "Unknown",
        "description": "A cake made without eggs, butter or milk. Wacky cake may have been created as the result of rationing during World War II, when milk and eggs were scarce.[37] The eggless batter means that the structure of the cake is entirely supported by gluten, which is strengthened by the acidic vinegar and salt.[38]",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wacky_Cake.jpg/600px-Wacky_Cake.jpg"
    },
    {
        "name": "Wedding cake",
        "country": "Unknown",
        "description": "A cake that is traditionally served at weddings. In the UK, the wedding cake is served at a wedding breakfast, a shared meal held after the ceremony (not necessarily in the morning). In other Western cultures, the cake is usually on display and served to guests at the reception.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/G%C3%A2teau_de_mariage.jpg/600px-G%C3%A2teau_de_mariage.jpg"
    },
    {
        "name": "Welsh cake",
        "country": "Wales",
        "description": "A sweet bread, usually made with currants, that is traditionally cooked on a bakestone.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Closeup_of_Welsh_cakes%2C_February_2009.jpg/600px-Closeup_of_Welsh_cakes%2C_February_2009.jpg"
    },
    {
        "name": "White cake",
        "country": "Unknown",
        "description": "A vanilla flavored cake made without egg yolks.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Angel_food_cake_with_strawberries_%284738859336%29.jpg/600px-Angel_food_cake_with_strawberries_%284738859336%29.jpg"
    },
    {
        "name": "Whoopie pies",
        "country": "United States",
        "description": "A dessert made of two round pieces of chocolate cake with a sweet, creamy frosting serving as the filling.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Whoopie_pie_with_dusting_of_confectioner%27s_sugar.jpg/600px-Whoopie_pie_with_dusting_of_confectioner%27s_sugar.jpg"
    },
    {
        "name": "Wine cake",
        "country": "Colombia",
        "description": "A cake made with wine.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Day_43_dark_chocolate_red_wine_cake_%2832830156696%29.jpg/600px-Day_43_dark_chocolate_red_wine_cake_%2832830156696%29.jpg"
    },
    {
        "name": "Wingko",
        "country": "Indonesia",
        "description": "A traditional pancake made mainly of coconut.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/6._Wingko_Babat_3.jpg/600px-6._Wingko_Babat_3.jpg"
    },
    {
        "name": "Yema cake",
        "country": "Philippines",
        "description": "A chiffon cake with a custard filling known as yema.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Yema_cake_%28Philippines%29.jpg/600px-Yema_cake_%28Philippines%29.jpg"
    },
    {
        "name": "Zuger Kirschtorte",
        "country": "Switzerland",
        "description": "A cake made with layers of nut meringue, sponge cake and buttercream. It is flavored with kirschwasser.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Zuger-Kirschtorte-Stueck-2013.jpg/600px-Zuger-Kirschtorte-Stueck-2013.jpg"
    },
    {
        "name": "Zuppa Inglese",
        "country": "Italy",
        "description": "A layered dessert consisting of sponge cake soaked in Alchermes and custard.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/2_Zuppa_inglese.jpg/600px-2_Zuppa_inglese.jpg"
    }
]


export default cakes;