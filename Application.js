// Bataille Navale


var scorej, scoreo;
var xa,ya, bateau, boatx, boaty, h;
var orient;
var To, Tj;
var Touchj, Toucho;
scorej = scoreo = 0;
Tj = To = Tableau(9, 9);
Touchj = Toucho = Tableau(9, 9);

for(i=0; i<9; i++){
  for(j=0; j<9; j++){
    Tj[i][j] = 0;
    To[i][j] = 0;
  }
}

for(i=0; i<9; i++){
  for(j=0; j<9; j++){
    Touchj[i][j] = false;
    Toucho[i][j] = false;
  }
}

    
    


Texte(75, 40, 'Tableau du joueur', 'black');
Texte(755, 40, 'Tableau adverse', 'black');


function botAleatoire(){  
  var xa=0,ya=0;
  var x,y;
  x=(Hasard(8)+1)*75;  
  y=(Hasard(8)+1)*50;
  xa = x/75;        
  ya = y/50;
  
  while(75>=x || x>=600 || 50>=y || y>=400 || Touchj[xa][ya]){
    x=(Hasard(8)+1)*75;  
    y=(Hasard(8)+1)*50;
    xa = x/75;        
    ya = y/50;
  }
  Ecrire(xa);
  Ecrire(ya);        
  Texte(75*xa,ya*50+20, Tj[xa-1][ya-1], 'black');
  if(Tj[xa-1][ya-1] == 1){
    Ecrire('Touché!!!');
    scoreo ++;
  }
  else{
    Ecrire('Raté!!!');
  }
  Touchj[xa-1][ya-1] = true;
}  
            
        

      
function MouseClick(x, y){
  var xa=0,ya=0;
  for(i=1; i<10; i++){
    for(j=1; j<10; j++){
      xa = i-1;
      ya = j-1;
      if(680+i*75<x && x<765+i*75 && j*50<y && y<j*50+50 && !Toucho[xa-1][ya-1]){
        Texte(710+75*i,j*50+20, To[xa-1][ya-1], 'black');
        
        if(To[xa-1][ya-1] == 1){
          Ecrire('Touché!!!');
          scorej++;
        } 
        else{
          Ecrire('Raté!!!');
        }
        Toucho[xa-1][ya-1] = true;
        botAleatoire();
      }
    }
   
  }
  if(scoreo >= 14){
    Texte(500, 500, "Vous avez perdu", 'black');
  }
  else if(scorej >= 14){
    Texte(500, 500, "Vous avez gagné", 'black');
  }
 
}









//Tableaux dans l'interface graphique
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






//placement des bateaux

function PlacerBateauIA(){
bateau = 0;						
while(bateau<5){
  boatx = Hasard(4)+2;
  boaty = Hasard(4)+2;
  if(To[boatx][boaty] != 1){
    To[boatx][boaty] = 1;
    if(To[boatx-1][boaty]==1 && boatx>=1 || boatx>=2 && To[boatx-2][boaty]==1){
        orient = Hasard(3);
      }
    if(To[boatx][boaty-1]==1 || To[boatx][boaty-2]==1){
      orient = Hasard(3)+1;
    }
    if(To[boatx+1][boaty]==1 && boatx<=1 || boatx<=2 && To[boatx+2][boaty]==1){
      while(orient == 1){
        orient= Hasard(4);
      }
    }
    if(To[boatx][boaty+1]==1 && boaty<=1 || boaty<=2 && To[boatx][boaty+2]==1){
      while(orient == 2){
        orient = Hasard(4);
      }
    }
    else{
      orient = Hasard(4);
    }
    
    if(bateau>3){
      if(boatx>=3 && To[boatx-3][boaty]==1){
        orient = Hasard(3);
      }
      if(boaty>=3 && To[boatx][boaty-3]==1){
        orient = Hasard(3)+1;
      }
      if(boatx<=3 && To[boatx+3][boaty]==1){
        while(orient == 1){
          orient= Hasard(4);
        }
      }
      if(boaty<=3 && To[boatx][boaty+3]==1){
        while(orient == 2){
          orient = Hasard(4);
        }
      }
      else{
        orient = Hasard(4);
      }
    }
    
    
    
    
    if(orient == 0){
      To[boatx][boaty-1]=1;
    }
    else if(orient == 1){
      To[boatx+1][boaty]=1;
    }
    else if(orient == 2){
      To[boatx][boaty+1]=1;
    }
    else{
      To[boatx-1][boaty]=1;
    }
    if(bateau>1){
      if(orient == 0){
        To[boatx][boaty-2]=1;
      }
      else if(orient == 1){
        To[boatx+2][boaty]=1;
      }
      else if(orient == 2){
        To[boatx][boaty+2]=1;
      }
      else{
        To[boatx-2][boaty]=1;
      }
      
      if(bateau>3){
        if(orient == 0){
          To[boatx][boaty-3]=1;
        }
        else if(orient == 1){
          To[boatx+3][boaty]=1;
        }
        else if(orient == 2){
          To[boatx][boaty+3]=1;
        }
        else{
          To[boatx-3][boaty]=1;
        }
      }
    }
    
    
    bateau ++;
  }
}
}


function PlacerBateauJ(){
bateau = 0;						
while(bateau<5){
  boatx = Hasard(4)+2;
  boaty = Hasard(4)+2;
  if(Tj[boatx][boaty] != 1){
    Tj[boatx][boaty] = 1;
    if(Tj[boatx-1][boaty]==1 && boatx>=1 || boatx>=2 && Tj[boatx-2][boaty]==1){
        orient = Hasard(3);
      }
    if(Tj[boatx][boaty-1]==1 || Tj[boatx][boaty-2]==1){
      orient = Hasard(3)+1;
    }
    if(Tj[boatx+1][boaty]==1 && boatx<=1 || boatx<=2 && Tj[boatx+2][boaty]==1){
      while(orient == 1){
        orient= Hasard(4);
      }
    }
    if(Tj[boatx][boaty+1]==1 && boaty<=1 || boaty<=2 && Tj[boatx][boaty+2]==1){
      while(orient == 2){
        orient = Hasard(4);
      }
    }
    else{
      orient = Hasard(4);
    }
    
    if(bateau>3){
      if(boatx>=3 && Tj[boatx-3][boaty]==1){
        orient = Hasard(3);
      }
      if(boaty>=3 && Tj[boatx][boaty-3]==1){
        orient = Hasard(3)+1;
      }
      if(boatx<=3 && Tj[boatx+3][boaty]==1){
        while(orient == 1){
          orient= Hasard(4);
        }
      }
      if(boaty<=3 && Tj[boatx][boaty+3]==1){
        while(orient == 2){
          orient = Hasard(4);
        }
      }
      else{
        orient = Hasard(4);
      }
    }
    
    
    
    
    if(orient == 0){
      Tj[boatx][boaty-1]=1;
    }
    else if(orient == 1){
      Tj[boatx+1][boaty]=1;
    }
    else if(orient == 2){
      Tj[boatx][boaty+1]=1;
    }
    else{
      Tj[boatx-1][boaty]=1;
    }
    if(bateau>1){
      if(orient == 0){
        Tj[boatx][boaty-2]=1;
      }
      else if(orient == 1){
        Tj[boatx+2][boaty]=1;
      }
      else if(orient == 2){
        Tj[boatx][boaty+2]=1;
      }
      else{
        Tj[boatx-2][boaty]=1;
      }
      
      if(bateau>3){
        if(orient == 0){
          Tj[boatx][boaty-3]=1;
        }
        else if(orient == 1){
          Tj[boatx+3][boaty]=1;
        }
        else if(orient == 2){
          Tj[boatx][boaty+3]=1;
        }
        else{
          Tj[boatx-3][boaty]=1;
        }
      }
    }
    
    
    bateau ++;
  }
}
}//test


PlacerBateauIA();
PlacerBateauJ();
Ecrire('Tableau adverse: ');
AfficherTableau(To);
Ecrire('Votre tableau: ');
AfficherTableau(Tj);
//test