// C++ code
//
int L1 = 1;
int L2 = 2;
int L3 = 3;
int L4 = 4;
int L5 = 5;
int L6 = 6;
void setup()
{
  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
  pinMode(L3, OUTPUT);
  pinMode(L4, OUTPUT);
  pinMode(L5, OUTPUT);
  pinMode(L6, OUTPUT);
}

void loop()
{
  /digitalWrite(L1, HIGH);
  digitalWrite(L2, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(L1, LOW);
  digitalWrite(L2, HIGH);
  digitalWrite(L3, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(L2, LOW);
  digitalWrite(L3, HIGH);
  digitalWrite(L4, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(L3, LOW);
  digitalWrite(L4, HIGH);
  digitalWrite(L5, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(L4, LOW);
  digitalWrite(L5, HIGH);
  digitalWrite(L6, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(L6, LOW);
  digitalWrite(L5, HIGH);
  digitalWrite(L4, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(L5, LOW);
  digitalWrite(L4, HIGH);
  digitalWrite(L3, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(L4, LOW);
  digitalWrite(L3, HIGH);
  digitalWrite(L2, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(L3, LOW);
  digitalWrite(L2, HIGH);
  digitalWrite(L1, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)/
  
  for (int i = 1; i <= 5; i++) { 
        digitalWrite(i, HIGH);
        digitalWrite(i+1, HIGH);
        delay(1000); // Esperar 1000 milisegundos
        for (int j = i; j <= i; j++) { j =1
            digitalWrite(j, LOW);
        }
    }

    // Encender luces en orden descendente
    for (int i = 6; i >= 2; i--) {
        digitalWrite(i, HIGH);
        digitalWrite(i-1, HIGH);
        delay(1000); // Esperar 1000 milisegundos
        for (int j = i; j >= i; j--) {
            digitalWrite(j, LOW);
        }
    }
  };









}