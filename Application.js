//Bataille Navale

var scorej, scoreo;
var xa,ya, bateau, boatx, boaty, h;
var orient;
var To, Tj;
var Touchj, Toucho;
scorej = scoreo = 0;
Tj =Tableau(8, 8);
To = Tableau(8, 8);
Touchj = Tableau(8, 8);
Toucho = Tableau(8, 8);

for(i=0; i<8; i++){
  for(j=0; j<8; j++){
    Tj[i][j] = "O";
    To[i][j] = "O";
  }
}

for(i=0; i<8; i++){
  for(j=0; j<8; j++){
    Touchj[i][j] = false;
    Toucho[i][j] = false;
  }
}

function Keypressed(k) {
  if (k == Caractere_vers_Ascii('h') ||k == Caractere_vers_Ascii('H')) {
    alert("Pour gagner il suffit de couler les bateaux ennemis!!\nSi il vous est demandé plusieurs fois de placer unmême bateau\nalors placer le différemment!");   
  } 
} 


function botAleatoire(){  
  var xa=0,ya=0;
  var x,y;
  do{
    x=(Hasard(8)+1)*75;  
    y=(Hasard(8)+1)*50;
    xa = x/75;        
    ya = y/50;
  }while(Touchj[xa-1][ya-1]);
  
  Ecrire(xa);
  Ecrire(ya);        

  if(Tj[xa-1][ya-1] == 1){
    Texte(75*(xa+1)+40,(ya+1)*50+20, 'X', 'red');   
    RectanglePlein(100,540,50,50,'white'); 
    Texte(100,550,'Touché!!!','red'); 
    scoreo ++;
  }
  else{
    Texte(75*(xa+1)+40,(ya+1)*50+20, Tj[xa-1][ya-1], 'blue');  
    RectanglePlein(100,540,50,50,'white'); 
    Texte(100,550,'Raté!!!','blue');
    
  }
  Touchj[xa-1][ya-1] = true;
}  
            
        

      
function MouseClick(x, y){
  var xa=0,ya=0;
  for(i=1; i<10; i++){
    for(j=1; j<10; j++){
      xa = i-1;
      ya = j-1; 
        
       if(((x>750 && x<1450) && (y>50 && y<100)) || ((y>50 && y<500) && (x>750 && x<825))){
          alert("ceci n'est pas une case");
         return;
          
       }else{
          
          if((680+i*75<x && x<765+i*75) && (j*50<y && y<j*50+50) && !Toucho[xa-1][ya-1]){
            if(680+((i+1)*75)<x && x<765+((i)*75)){
              x=x-10;            
          }          
          
            if(To[xa-1][ya-1] == 1){
              Texte(710+75*i,j*50+20, 'X', 'red');
              RectanglePlein(800,540,50,50,'white'); 
              Texte(800,550,'Touché!!!','red');      
              scorej++;
            } 
            else{
              Texte(710+75*i,j*50+20, To[xa-1][ya-1], 'blue');  
              RectanglePlein(800,540,50,50,'white'); 
              Texte(800,550,'Raté!!!','blue');         
                 
            
            }
          Toucho[xa-1][ya-1] = true;
          botAleatoire();
          }
        }
    }          
  }
  if(scoreo >= 14){
    alert("Dommage! Vous avez perdu!!");
    
  }
  else if(scorej >= 14){
   alert("Bravo,Vous avez gagné!!");
  }
 
}









//Tableaux dans l'interface graphique
function CreerInterface(){
Texte(75, 40, 'Tableau du joueur', 'black');
Texte(755, 40, 'Tableau adverse', 'black');
for(i=1; i<10; i++){
  for(j=1; j<10; j++){
    if(i<2 || j<2){
      RectanglePlein(i*75, j*50, 75, 50, 'grey');
      if(i==1){
        Texte(75+30, j*50+25, Ascii_vers_Caractere(63+j), 'black');
      }
      if(j==1){
        Texte(75*i+30, 50+25, Ascii_vers_Caractere(47+i), 'black');
      }
    }
    if(i==1 &&j==1){
      RectanglePlein(i*75, j*50, 75, 50, 'black');
    }
    Rectangle(i*75, j*50, 75, 50, 'black');
  }
}


for(i=1; i<10; i++){
  for(j=1; j<10; j++){
    if(i<2 || j<2){
      RectanglePlein(i*75+680, j*50, 75, 50, 'grey');
    }
    if(i==1 &&j==1){
      RectanglePlein(i*75+680, j*50, 75, 50, 'black');
    }
    Rectangle(i*75+680, j*50, 75, 50, 'black');
  }
}
}



//placement des bateaux

function PlacerBateauIA(){
  var x,y;
  for(i=0;i<5; i++){
    orient = Hasard(2);
    if(i <2){
      if(orient == 0){
        do{
          x = Hasard(7);
          y = Hasard(8);
        }while(To[x][y] == 1 || To[x+1][y] == 1);
        To[x][y] = 1;
        To[x+1][y] = 1;
      }
      else{
        do{
          x = Hasard(8);
          y = Hasard(7);
        }while(To[x][y] == 1 || To[x][y+1] == 1);
        To[x][y] = 1;
        To[x][y+1] = 1;
      }
    }
    
    else if(i< 4){
      if(orient == 0){
        do{
          x = Hasard(6);
          y = Hasard(8);
        }while(To[x][y] == 1 || To[x+1][y] == 1 || To[x+2][y] == 1);
        To[x][y] = 1;
        To[x+1][y] = 1;
        To[x+2][y] = 1;
      }
      else{
        do{
          x = Hasard(8);
          y = Hasard(6);
        }while(To[x][y] == 1 || To[x][y+1] == 1 || To[x][y+2] == 1);
        To[x][y] = 1;
        To[x][y+1] = 1;
        To[x][y+2] = 1;
      }
    }
    
    else{
      if(orient == 0){
        do{
          x = Hasard(5);
          y = Hasard(8);
        }while(To[x][y] == 1 || To[x+1][y] == 1 || To[x+2][y] == 1 || To[x+3][y] == 1);
        To[x][y] = 1;
        To[x+1][y] = 1;
        To[x+2][y] = 1;
        To[x+3][y] = 1;
      }
      else{
        do{
          x = Hasard(8);
          y = Hasard(5);
        }while(To[x][y] == 1 || To[x][y+1] == 1 || To[x][y+2] == 1 || To[x][y+3] == 1);
        To[x][y] = 1;
        To[x][y+1] = 1;
        To[x][y+2] = 1;
        To[x][y+3] = 1;
      }
    }
  }
}


function PlacerBateauJ(){
var x,y;
  for(i=0;i<5; i++){
    do{
      orient = SaisieEntier("Placement du bateau n°"+ enChaine(i+1) +". \nSaisir '0' pour placer un bateau à l'horizontale\nSaisir '1' pour placer un bateau à la verticale");
    }while(orient != 0 && orient != 1);
    
    if(i <2){
      if(orient == 0){
        do{
          do{
            x = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 2 cases).\n Vous avez choisi l'horizontale.\n Coordonnées X du bateau (entre 0 et 6):");
            y = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 2 cases).\n Vous avez choisi l'horizontale.\n Coordonnées Y du bateau (entre 0 et 7):");
          }while(x<0 || x>6 || y<0 || y>7);
        }while(Tj[x][y]==1 || Tj[x+1][y]==1);
        Tj[x][y] = 1;
        Tj[x+1][y] = 1;
    }
      else{
        do{
          do{
            x = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 2 cases).\n Vous avez choisi la verticale.\n Coordonnées X du bateau (entre 0 et 7):");
            y = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 2 cases).\n Vous avez choisi la verticale.\n Coordonnées Y du bateau (entre 0 et 6):");
          }while(x<0 || x>7 || y<0 || y>6);
        }while(Tj[x][y] == 1 || Tj[x][y+1] == 1);
        Tj[x][y] = 1;
        Tj[x][y+1] = 1;
      }
    }
    
    else if(i< 4){
      if(orient == 0){
        do{
          do{
            x = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 3 cases).\n Vous avez choisi l'horizontale.\n Coordonnées X du bateau (entre 0 et 5):");
            y = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 3 cases).\n Vous avez choisi l'horizontale.\n Coordonnées Y du bateau (entre 0 et 7):");
          }while(x<0 || x>5 || y<0 || y>7);
        }while(Tj[x][y] == 1 || Tj[x+1][y] == 1 || Tj[x+2][y] == 1);
        Tj[x][y] = 1;
        Tj[x+1][y] = 1;
        Tj[x+2][y] = 1;
      }
      else{
        do{
          do{
            x = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 3 cases).\n Vous avez choisi la verticale.\n Coordonnées X du bateau (entre 0 et 7):");
            y = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 3 cases).\n Vous avez choisi la verticale.\n Coordonnées Y du bateau (entre 0 et 5):");
          }while(x<0 || x>7 || y<0 || y>5);
        }while(Tj[x][y] == 1 || Tj[x][y+1] == 1 || Tj[x][y+2] == 1);
        Tj[x][y] = 1;
        Tj[x][y+1] = 1;
        Tj[x][y+2] = 1;
      }
    }
    
    else{
      if(orient == 0){
        do{
          do{
            x = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 4 cases).\n Vous avez choisi l'horizontale.\n Coordonnées X du bateau (entre 0 et 4):");
            y = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 4 cases).\n Vous avez choisi l'horizontale.\n Coordonnées Y du bateau (entre 0 et 7):");
          }while(x<0 || x>4 || y<0 || y>7);
        }while(Tj[x][y] == 1 || Tj[x+1][y] == 1 || Tj[x+2][y] == 1 || Tj[x+3][y] == 1);
        Tj[x][y] = 1;
        Tj[x+1][y] = 1;
        Tj[x+2][y] = 1;
        Tj[x+3][y] = 1;
      }
      else{
        do{
          do{
            x = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 4 cases).\n Vous avez choisi la verticale.\n Coordonnées X du bateau (entre 0 et 7):");
            y = SaisieEntier("Placement du bateau n°" + enChaine(i+1) + "(à 4 cases).\n Vous avez choisi la verticale.\n Coordonnées Y du bateau (entre 0 et 4):");
          }while(x<0 || x>4 || y<0 || y>7);
        }while(Tj[x][y] == 1 || Tj[x][y+1] == 1 || Tj[x][y+2] == 1 || Tj[x][y+3] == 1);
        Tj[x][y] = 1;
        Tj[x][y+1] = 1;
        Tj[x][y+2] = 1;
        Tj[x][y+3] = 1;
      }
    }
  }
}


CreerInterface();
PlacerBateauIA();
PlacerBateauJ();
AfficherTableau(Tj);