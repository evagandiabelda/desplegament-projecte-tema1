## Índex

- [Introducció Teòrica](#introducció-teòrica)
  - [Què és Git?](#què-és-git)
  - [Què és Git Flow?](#què-és-git-flow)
  - [Per què utilitzem Git Flow en aquest projecte?](#per-què-utilitzem-git-flow-en-aquest-projecte)
- [Procés](#procés)
  - [Inicialització del repositori](#inicialització-del-repositori)
  - [Creació dels directoris per a cada usuari](#creació-dels-directoris-per-a-cada-usuari)
  - [Usuari 1](#usuari-1)
  - [Usuari 2](#usuari-2)
  - [Usuari 3](#usuari-3)
  - [Modificacions finals](#modificacions-finals)

## Introducció Teòrica

### Què és Git?

Git és un sistema de control de versions distribuït utilitzat per gestionar i registrar els canvis en el codi font d'un projecte. A diferència d'altres sistemes de control de versions centralitzats, Git permet que cada desenvolupador tinga una còpia completa del repositori (coneguda com a clon), la qual cosa facilita treballar en local sense necessitat d'estar connectat a un servidor central.

Amb Git, els desenvolupadors poden:

- Realitzar canvis en les seues pròpies branques sense afectar la versió principal.
- Rastrejar l'historial de modificacions, permetent revertir canvis si és necessari.
- Col·laborar de manera més eficient, integrant els canvis de diversos desenvolupadors en un projecte.

Git s'utilitza àmpliament en la indústria del programari per la seua flexibilitat, eficiència i suport per al treball col·laboratiu, la qual cosa el converteix en una eina essencial en el desenvolupament modern de programari.

### Què és Git Flow?

Git Flow és una metodologia o flux de treball per organitzar el desenvolupament de programari utilitzant Git. Va ser dissenyat per a projectes que segueixen un cicle de vida de desenvolupament amb fases clares, com ara desenvolupament de noves característiques, proves, llançaments i manteniment.

Aquest flux de treball s'estructura en diverses branques principals i de suport:

- **Main (o Master)**: És la branca principal del projecte que sempre ha d'estar en un estat estable i llest per a producció.
- **Develop**: És la branca base per al desenvolupament de noves característiques. Ací és on s'integren les contribucions abans que estiguen llestes per a ser llançades.
- **Feature Branches**: Branques que es creen a partir de `develop` per desenvolupar noves característiques específiques. Una vegada acabada la característica, s'integren de nou en `develop`.
- **Release Branches**: Branques que es creen per preparar una nova versió estable del projecte. Permeten realitzar proves finals i corregir petits errors abans de fusionar els canvis en `main`.
- **Hotfix Branches**: S'utilitzen per solucionar errors crítics detectats en producció. Es creen a partir de `main` i, una vegada resolt el problema, es fusionen en `main` i en `develop` per mantenir ambdues branques actualitzades.

### Per què utilitzem Git Flow en aquest projecte?

En aquest projecte, utilitzem Git Flow per organitzar el desenvolupament de manera estructurada i eficient, simulant un entorn de col·laboració en equip. Els motius principals són:

- **Divisió clara del treball**: Cada usuari (usuari1, usuari2, usuari3) treballa en la seua pròpia branca de característiques (feature branches), la qual cosa facilita el desenvolupament en paral·lel sense que es generen conflictes.
- **Control del procés de versions**: La metodologia ens permet preparar versions estables en branques de release i corregir errors crítics en hotfix, assegurant així un cicle de desenvolupament ben gestionat.
- **Facilita la col·laboració i la integració contínua**: Git Flow està dissenyat per integrar-se amb eines d'integració contínua (CI/CD), la qual cosa resulta útil en projectes més grans. Encara que en aquest projecte l'apliquem a petita escala, és una bona pràctica que facilita l'adaptació a entorns de desenvolupament professional.

## Procés

### Inicialització del repositori:

![Captura](captures/1%20-%20Creació%20d'un%20nou%20repositori%20a%20GitHub.png)

### Creació dels directoris per a cada usuari:

Comencem treballant de moment amb els Usuaris 1 i 2:
![Captura](captures/2%20-%20Creació%20d'un%20directori%20per%20a%20cada%20usuari.png)

Clonem el repositori remot al directori de cada Usuari:
![Captura](captures/3%20-%20Clonació%20del%20repositori%20per%20a%20cada%20usuari.png)

### Usuari 1:

Al repositori local de l’Usuari 1, configurem Git Flow:
![Captura](</captures/4%20-%20Configuració%20de%20Git%20Flow%20(usuari1).png>)

A continuació, creem l’estructura d’arxius del projecte:
![Captura](</captures/5%20-%20Creació%20de%20l'estructura%20de%20fitxers%20del%20projecte%20(usuari1).png>)

Implementem el codi HTML inicial:
![Captura](</captures/6%20-%20Implementació%20del%20codi%20HTML%20inicial%20(usuari1).png>)

Realitzem un primer commit amb el que portem fins ara:
![Captura](</captures/7%20-%20Primer%20commit%20(usuari1).png>)

I ho enviem al repositori remot:
![Captura](</captures/8%20-%20Primer%20push%20(usuari1).png>)

### Usuari 2:

Canviem a l’Usuari 2 i configurem Git Flow al seu repositori local:
![Captura](</captures/9%20-%20Configuració%20de%20Git%20Flow%20(usuari2).png>)

Actualitzem el repositori local, però ens dóna un error:
![Captura](</captures/10%20-%20Actualització%20del%20repositori%20-%20Dóna%20un%20error%20(usuari2).png>)

Després d’investigar sobre aquest error (sense entendre massa bé què passa), apliquem la solució i, ara sí, el repositori local de l’Usuari 2 està actualitzat:
![Captura](</captures/10%20-%20Actualització%20del%20repositori%20-%20Solucionat%20(usuari2).png>)

Creem una nova branca Feature anomenada “contingutHTML”:
![Captura](</captures/11%20-%20Creació%20de%20la%20rama%20feature%20contingutHTML%20(usuari2).png>)

Des d’aquesta branca, afegim una nova funcionalitat:
![Captura](</captures/12%20-%20Afegiment%20d'exemple%20de%20modificació%20al%20HTML%20(usuari2).png>)

A continuació, realitzem un commit per als canvis implementats:
![Captura](</captures/13%20-%20Primer%20commit%20(usuari2).png>)

I després pugem els canvis al repositori remot:
![Captura](</captures/14%20-%20Primer%20push%20(usuari2).png>)

Per altra banda, creem una altra branca Feature anomenada “atributsHTML”:
![Captura](</captures/15%20-%20Creació%20de%20la%20rama%20feature%20atributsHTML%20(usuari2).png>)

I, des d’aquesta branca, afegim una altra funcionalitat:
![Captura](</captures/16%20-%20Afegiment%20d'exemple%20de%20modificació%20al%20HTML%20(usuari2).png>)

Realitzem el corresponent commit:
![Captura](</captures/17%20-%20Segon%20commit%20(usuari2).png>)

I després pugem aquests canvis al repositori remot:
![Captura](</captures/18%20-%20Segon%20push%20(usuari2).png>)

Una vegada pujats tots els canvis, finalitzem les branques Feature, però a la segona ens dóna un error:
![Captura](</captures/19%20-%20Finalització%20de%20la%20rama%20feature%20contingutHTML%20(usuari2).png>)
![Captura](</captures/20%20-%20Finalització%20de%20la%20rama%20feature%20atributsHTML%20-%20Dóna%20error%20(usuari2).png>)

Com la informació de la segona branca Feature no havia estat actualitzada, detecta un conflicte:
![Captura](</captures/21%20-%20Visualització%20del%20conflicte%20(usuari2).png>)

Resolem el conflicte mantenint ambdós funcionalitats:
![Captura](</captures/22%20-%20Ressolució%20del%20conflicte%20-%20Conservem%20ambdós%20implementacions%20(usuari2).png>)

Ara sí, realitzem el push corresponent:
![Captura](</captures/23%20-%20Tercer%20push%20(usuari2).png>)

I finalitzem la branca “feature/atributsHTML”:
![Captura](</captures/24%20-%20Finalització%20de%20la%20rama%20feature%20atributsHTML%20-%20Solucionat%20(usuari2).png>)

Els canvis no apareixen reflexats al repositori remot, així que resolem el problema fent un nou push des de la branca “develop”:
![Captura](</captures/25%20-%20Push%20des%20de%20la%20branch%20Develop%20(usuari2).png>)

### Usuari 3:

Creem el directori que allotjarà la còpia local del repositori per a l’Usuari 3 i clonem en aquesta el repositori remot:
![Captura](</captures/26%20-%20Creació%20de%20l'usuari3%20i%20clonació%20de%20repositori%20(usuari3).png>)

Configurem Git Flow per a aquest Usuari:
![Captura](</captures/27%20-%20Configuració%20de%20Git%20Flow%20(usuari3).png>)

Afegim nous estils CSS al full d’estils:
![Captura](</captures/28%20-%20Afegiment%20de%20nous%20estils%20CSS%20(usuari3).png>)

Realitzem un primer commit de l’Usuari 3:
![Captura](</captures/29%20-%20Primer%20commit%20(usuari3).png>)

I després enviem els canvis al repositori remot:
![Captura](</captures/30%20-%20Primer%20push%20(usuari3).png>)

### Modificacions finals:

Canviem de nou a l’Usuari 1 i actualitzem la info de la branca Develop:
![Captura](</captures/31%20-%20Canvi%20a%20l'usuari%201%20i%20actualització%20de%20la%20branca%20Develop%20(usuari1).png>)

A partir d’aquesta, creem una nova branca Release anomenada “v1.0”:
![Captura](</captures/32%20-%20Creació%20de%20nova%20branca%20Release%20v1.0%20(usuari1).png>)

Des d’aquesta branca, realitzem algunes modificacions lleugeres en quant a l’estructuració del codi. Per exemple, ara que ja tenim les diferents seccions implementades per la resta d’usuaris, les afegim al menú principal. A més, enviem tot el codi Javascript a l’arxiu “script.js”, deixant el codi HTML molt més net:
![Captura](</captures/33%20-%20Ordenació%20de%20l'estructura%20i%20modificacions%20sobre%20el%20codi%20(usuari1).png>)

A continuació, realitzem un commit amb les millores implementades:
![Captura](</captures/34%20-%20Commit%20des%20de%20la%20branca%20Release%20(usuari1).png>)

Realitzem un merge de la branca “release/v1.0” amb la branca “Develop” i enviem la informació al repositori remot:
![Captura](</captures/35%20-%20Merge%20de%20release%20v1.0%20amb%20Develop%20i%20Push%20al%20repositori%20remot%20(usuari1).png>)

Per últim, creem la branca “gh-pages”, la qual allotjarà la documentació del projecte:
![Captura](</captures/36%20-%20Creació%20de%20la%20branca%20gh-pages%20(usuari1).png>)

Creem l’arxiu README.md i l’emplenem amb la informació corresponent:
![Captura](</captures/37%20-%20Creació%20de%20l'arxiu%20README.md%20(usuari1).png>)
![Captura](</captures/38%20-%20Afegiment%20de%20la%20documentació%20a%20l'arxiu%20README.md%20(usuari1).png>)
