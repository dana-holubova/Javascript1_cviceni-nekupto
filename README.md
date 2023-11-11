# Javascript1_cviceni-nekupto
## Nekup to, třídy
*JavaScriptem upravte třídy.*

Vytvořte si repozitář ze šablony [cviceni-nekupto](https://github.com/Czechitas-podklady-WEB/cviceni-nekupto). Repozitář obsahuje stránku, která nabízí několik neotřelých produktů.

1. Otevřete si naklonovanou složku ve VS Code a prohlédněte si zdrojové HTML. Stránka je nastylována pomocí CSS knihovny [Bootstrapu](https://getbootstrap.com/). Co přesně dělají použité CSS třídy není pro toto cvičení podstatné, nemusíte jim věnovat velkou pozornost.
1. V souboru `index.js` si na posledním řádku do proměnné uložte kartu s prvním produktem. Pomocí metody `classList.add` přidejte na tento element třídu `border-primary`, abychom první produkt na stránce zvýraznili.
1. Do jiné proměnné si uložte tlačítko na druhé kartě. Pomocí metody `classList.remove` odeberte třídu `btn-primary` a podívejte se, jak se tlačítko vizuálně změnilo.
1. Do další proměnné si uložte element s třídou `card-title` posledního produktu. Pomocí voláni metody `classList.toggle` přidejte na tento element třídu `text-center`. Text by se měl tímto zarovnat na střed. Vyzkoušejte si, že když tuto metodu zavoláte znova, třída se z prvku odstraní. Takto můžete přepínat mezi přidáním a odebráním třídy pomocí opakovaného volání této metody.
Na konci by stránka v prohlížeči měla vypadat jako na obrázku níže:

![Screen - nekupto](https://kodim.cz/cms/assets/vyvoj-webu/js1/lekce/dom-innerhtml/cv-tridy-innerhtml/nekupto-tridy/screen-nekupto.png)

## Nekup to, obsah

Pokračujte v předchozím cvičení. Všimněte si, že v souboru `index.js` jsou uloženy údaje k jednotlivým produktům. Budeme chtít obsah naší stránky vygenerovat z těchto dat místo abychom je měli natvrdo zadrátované v HTML kódu.

1. Otevřete si soubor `index.html` a zkopírujte si HTML obsah prvního produktu a vytvořte z něj řetězec v přiloženém JavaScriptovém souboru. Váš kód může vypadat třeba takto.
```
const product1HTML = `
  <img class="card-img-top" src="images/destniklobouk.jpg" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">Deštníklobouk</h2>
    <p class="card-text">Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;
```
2. Obsah prvního produktu v souboru `index.html` můžeme nyní smazat. Výsledné HTML pak bude vypadat takto.
```
<div id="product1" class="card mb-4 box-shadow"></div>
```
3. Pomocí interpolace řetězců předělejte váš JavaScriptový kód tak, že do vašeho řetězce s produktem vložíte obsah vlastností `image`, `name` a `description`.
4. Do nějaké proměnné si uložte element prvního produktu a nastavte jeho `innerHTML` na váš sestavený řetězec. Tímto na stránku vložíme obrázek prvního produktu.
5. Opakujte tento postup pro všechny ostatní produkty. Na konci byste měli dospět do stavu, kdy soubor `index.html` vůbec neosahuje vnitřek karet pro jednotlivé produkty. Jejich obsah je celý vyroben JavaScriptem z připravených dat.
