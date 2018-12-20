// Bataille Navale


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
    Tj[i][j] = 0;
    To[i][j] = 0;
  }
}

for(i=0; i<8; i++){
  for(j=0; j<8; j++){
    Touchj[i][j] = false;
    Toucho[i][j] = false;
  }
}

    
    


Texte(75, 40, 'Tableau du joueur', 'black');
Texte(755, 40, 'Tableau adverse', 'black');


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
  Texte(75*(xa+1)+40,(ya+1)*50+20, Tj[xa-1][ya-1], 'black');
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
      Ecrire("xa:"+xa);
  		Ecrire("ya:"+ya); 
  		Ecrire("x :"+x);
 		Ecrire("y :"+y);   
       if(((x>750 && x<1450) && (y>50 && y<100)) || ((y>50 && y<500) && (x>750 && x<825))){
          alert("ceci n'est pas une case");
         return;
          
        }else{
 	       
      if(682+i*75<x && x<765+i*75 && j*50<y && y<j*50+50 && !Toucho[xa-1][ya-1]){
        Ecrire("xa:"+xa);
  		Ecrire("ya:"+ya); 
  		Ecrire("x :"+x);
 		Ecrire("y :"+y);       
          
       
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
    orient = Hasard(2);
    if(i <2){
      if(orient == 0){
        do{
          x = Hasard(7);
          y = Hasard(8);
        }while(Tj[x][y] == 1 || Tj[x+1][y] == 1);
        Tj[x][y] = 1;
        Tj[x+1][y] = 1;
      }
      else{
        do{
          x = Hasard(8);
          y = Hasard(7);
        }while(Tj[x][y] == 1 || Tj[x][y+1] == 1);
        Tj[x][y] = 1;
        Tj[x][y+1] = 1;
      }
    }
    
    else if(i< 4){
      if(orient == 0){
        do{
          x = Hasard(6);
          y = Hasard(8);
        }while(Tj[x][y] == 1 || Tj[x+1][y] == 1 || Tj[x+2][y] == 1);
        Tj[x][y] = 1;
        Tj[x+1][y] = 1;
        Tj[x+2][y] = 1;
      }
      else{
        do{
          x = Hasard(8);
          y = Hasard(6);
        }while(Tj[x][y] == 1 || Tj[x][y+1] == 1 || Tj[x][y+2] == 1);
        Tj[x][y] = 1;
        Tj[x][y+1] = 1;
        Tj[x][y+2] = 1;
      }
    }
    
    else{
      if(orient == 0){
        do{
          x = Hasard(5);
          y = Hasard(8);
        }while(Tj[x][y] == 1 || Tj[x+1][y] == 1 || Tj[x+2][y] == 1 || Tj[x+3][y] == 1);
        Tj[x][y] = 1;
        Tj[x+1][y] = 1;
        Tj[x+2][y] = 1;
        Tj[x+3][y] = 1;
      }
      else{
        do{
          x = Hasard(8);
          y = Hasard(5);
        }while(Tj[x][y] == 1 || Tj[x][y+1] == 1 || Tj[x][y+2] == 1 || Tj[x][y+3] == 1);
        Tj[x][y] = 1;
        Tj[x][y+1] = 1;
        Tj[x][y+2] = 1;
        Tj[x][y+3] = 1;
      }
    }
  }
}


PlacerBateauIA();
PlacerBateauJ();
Ecrire('Tableau adverse: ');
AfficherTableau(To);
Ecrire('Votre tableau: ');
AfficherTableau(Tj);
