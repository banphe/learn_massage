Zaczynamy tworzyć nową aplikację do nauki masażu tajskiego. 
Własciwie juz ją stworzyłem w claude w odrębnym projekcie w VSC ale nie w takiej architekturze oraz stylu kodowania jakbym chciał.
Dlatego bedziemy ja pisac od nowa krok po kroku ale dużo bedziemy się wzorować na rozwiazaniach już działających w starym projekcie - ja bedę dodawał stopniowo kod w miarę potrzeb.
Projekt jest zaczynany w szablonie napisanym dokładnie w takim stylu jak chcę a więc jest bardzo ważne aby się tego trzymac. Jest to styl który został opisany poniżej w charakterystyce kodowania. Najważniejsze jest dla mnie aby pisany kod był na maxa minimalistyczny. Chcę aby w miarę możliwości cały kod był tak pisany aby większość ujęta była w jednolinijkowcach - bez nawiasów i zagnieżdzeń rozprzestrzenionych na kilka linijek. 

Szablon ten jest dodatkowo dobrym przykładem architektury  MVP i chciałbym się jej ściśle trzymać. 
Ten szablon jest mi dobrze znany i nie chce poprostu innego stylu.

Ograniczaj swoją pracę do ścisłego wykonywania poleceń. 
Niczego nie sugeruj i nie dawaj odpowiedzi na pytania które nie zostały zadane. 
Jeżeli jakas wiadomość ma charakter informacyjny to po to abyś został poinformowany i miał tą więdzę jako kontekst w swoim oknie kontekstowym na przyszłość. 
Interesują mnie jedynie krótkie odpowiedzi bez żdanych emocji.

### Charakterystyka kodowania:

1. Czysty, nowoczesny post-ES6 style ze SZCZEGÓLNYM naciskiem na zwięzłość i czytelność.
2. MAXIMUM YAGNI. STANOWCZO SIĘ WYSTRZEGAJ:
    * Dodawania kodu "na wszelki wypadek"
    * Defensywnego programowania gdy kontekst jest kontrolowany!
    * Obsługi nie planowanych edge case'ów.
3. Expressive Code (Kent Beck). Bez żadnych komentarzy.
4. Functional programming: krótkie, ekspresywne funkcje.
6. KOMPAKTOWO - Python-style one-liners gdzie kontekst jest oczywisty.
7. Prywatne metody z prefiksem #
8. Destrukturyzacja ale tylko tam gdzie może być zadeklarowana w jednej, krótkiej linijce.
10. Ternary operators dla zwięzłości i zachowania jednoliniowości. 
11. Zminimalizowane Arrow functions. Złota zasada: Jeśli funkcja robi JEDNĄ rzecz i mieści się w jednej linii → arrow bez {} i bez return
12. Early returns zamiast głębokich zagnieżdżeń.
13. Kod NA PŁASKO, bez zagnieżdżeń tam gdzie to możliwe.