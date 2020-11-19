#import numpy

seznam = [['jakub20', 'bob8', 'msdkf17', 'bob27', 'bob32', 'bob42', '22', '32', '33', '11', '11', 'Player20', 'Player11', 'Player20'], ['20', '8', '17', '27', '32', '42', '22', '32', '33', '11', '11', '20', '11', '20']]
#seznam= [[],[]]


def sort_the_highscore(seznam):
    items = len(seznam[0])
    if(items<10):
        for i in range(0,10-items):
            seznam[0].append('Player')
            seznam[1].append(0)




    seznam_inted = [[],[]]
    for i in seznam[0]:
        seznam_inted[0].append(i)
    for i in seznam[1]:
        seznam_inted[1].append(int(i))

    score_list = []

    for i in seznam_inted[1]:
       score_list.append(i)
    
    #temp_list = numpy.sort(score_list)
    temp_list = []
    sorted = False
    while(not sorted):
        a = 0
        b = 0
        for i in range(0,len(score_list)):
            if score_list[i] > a:
                a=score_list[i]
                b=i
        temp_list.append(a)
        score_list.pop(b)
        if len(score_list)==0: sorted=True
    
    #print(temp_list)
    #print(len(temp_list))



    score_list_sorted = []
    for i in temp_list:
        score_list_sorted.append(i)
    
    seznam_sorted = [[],[]]
    
    
    for i in range(0,10):
        k=0
        for j in range(0,len(seznam_inted[1])):
            if(score_list_sorted[i]==seznam_inted[1][j]):
                k=j
        seznam_sorted[1].append(seznam_inted[1][k])
        seznam_sorted[0].append(seznam_inted[0][k])        
        seznam_inted[1].pop(k)
        seznam_inted[0].pop(k)
        #print(seznam_inted)

    return(seznam_sorted)   


#print(sort_the_highscore(seznam))