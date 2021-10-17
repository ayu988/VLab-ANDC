#include<iostream>
#include<stdlib.h>
#include<time.h>
#include<iomanip>


using namespace std;
int main()
{
    cout.setf(ios::fixed);
    cout<<"------------------------------------------------------------"<<endl;
    cout<<"x"<<setw(15)<<"y"<<setw(14)<<"circle_pt"<<setw(12)<<"square_pt"<<setw(10)<<"pi"<<endl;
    cout<<"------------------------------------------------------------"<<endl;
    int i, intrval=1000;
    int cr_pt=0, sq_pt=0;
    double x,y,pi,r;
    srand(time(NULL));
    for (i=0; (i<intrval); i++)
    {
        x=double((1+rand()%intrval))/intrval;
        y=double((1+rand()%intrval))/intrval;
        r= x*x + y*y;
        if (r<=1)
            cr_pt++;
        sq_pt++;
        
        pi=double(4*cr_pt)/sq_pt;
        cout<<x<<setw(10)<<y<<setw(10)<<cr_pt<<setw(10)<<sq_pt<<setw(15)<<pi<<endl;
    } 
    return 0;
}