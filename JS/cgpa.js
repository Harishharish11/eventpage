var sum_credits=0,count=0,t_credit=0;

function myFunction() {
  var myid,myid2,myid3,x,crdt;
  var grade=['O','A+','A','B+','B','C']
  var temp=1;
  var this_credit=0,my_crtd=0;
  for(var i=1;i<9;i++)
        {    
             myid='sem_'+i;
             myid2='sem'+i;
             myid3='credit'+i;
             x=document.getElementById(myid2).value;
             crdt=document.getElementById(myid3).value;
             my_crtd+=parseInt(crdt);
             for(var j=0;j<6;j++)
             {
             	if(!grade[j].localeCompare(x))
             	{
             		temp=crdt*(10-j);
             		this_credit+=temp;
                    sum_credits+=temp;
             	}
             }
             document.getElementById(myid).innerHTML = temp;
             temp=1;
        }
   document.getElementById('gpa'+(count+1)).innerHTML=this_credit/my_crtd;
   t_credit+=my_crtd;
   count++;
   if(count==8)
   {
   	document.getElementById('cgpa_final').innerHTML=sum_credits/t_credit;
   }
}

