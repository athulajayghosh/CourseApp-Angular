import { Component } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {
data:any=[{"_id":"6347f7904584410016913521","courseTitle":"PHP","courseDescription":"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. ","courseDuration":"2 Months","courseDate":"2022-11-01","courseVenue":"Idukki"},{"_id":"6347f9794584410016913522","courseTitle":"B-tech","courseDescription":"4 Years","courseDuration":"4","courseDate":"2022-10-13","courseVenue":"Idukki"},{"_id":"6347fa034584410016913523","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"6347fa174584410016913524","courseTitle":"MCA","courseDescription":"PG in Computer Application","courseDuration":"2","courseDate":"2022-10-13","courseVenue":"Idukki"},{"_id":"6347fb334584410016913525","courseTitle":"MCA","courseDescription":"MCA","courseDuration":"3 Year","courseDate":"2022-10-15","courseVenue":"Ernakulam"},{"_id":"6347fb534584410016913526","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"6347fb7f4584410016913527","courseTitle":"BCA","courseDescription":"BCA","courseDuration":"6 months","courseDate":"2022-10-30","courseVenue":"MARIKA"},{"_id":"6347fbbf4584410016913528","courseTitle":"MBA","courseDescription":"MBA","courseDuration":"3 yrs","courseDate":"2022-10-04","courseVenue":"Kochi"},{"_id":"6347fbcf4584410016913529","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"6347fc9e458441001691352a","courseTitle":"B-TECH","courseDescription":"B-TECH","courseDuration":"4YRS","courseDate":"2022-10-07","courseVenue":"KOCHI"},{"_id":"6347fd27458441001691352b","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"6347fd60458441001691352c","courseTitle":"BCom","courseDescription":"Statistic","courseDuration":"3","courseDate":"2022-10-19","courseVenue":"Kochi"},{"_id":"6347fe1a458441001691352d","courseTitle":"B-tech","courseDescription":"BTECH","courseDuration":"4yrs","courseDate":"2022-10-08","courseVenue":"KOTTAYAM"},{"_id":"6347ffcd458441001691352e","courseTitle":"Data Mining","courseDescription":"Data mining is the process of sorting through large data sets to identify patterns and relationships that can help solve business problems through data analysis.","courseDuration":"6 Months","courseDate":"2022-11-01","courseVenue":"Kottayam"},{"_id":"63480092458441001691352f","courseTitle":"B.com","courseDuration":"6hrs","courseDate":"2022-10-14","courseVenue":"Kozhikode"},{"_id":"634800cb4584410016913530","courseTitle":"Python","courseDescription":"Python fullstack","courseDuration":"6 Months","courseVenue":"Ernakulam"},{"_id":"634802994584410016913531","courseTitle":"B.com","courseDuration":"5hrs","courseDate":"2022-10-21","courseVenue":"Kozhikode"},{"_id":"634802fb4584410016913532","courseTitle":"Python","courseDescription":"Python fullstack","courseDuration":"6 Months","courseVenue":"Ernakulam"},{"_id":"6348035e4584410016913533","courseTitle":"BBA","courseDuration":"6hrs","courseDescription":"3 years","courseDate":"2022-10-08","courseVenue":"kochi"},{"_id":"634804064584410016913534","courseTitle":"fsdsfs","courseDescription":"ssssssfgD","courseDuration":"43","courseDate":"2022-10-01","courseVenue":"IDUKKI"},{"_id":"634804b24584410016913535","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"634804f84584410016913536","courseTitle":"Python","courseDescription":"Python fullstack","courseDuration":"3 months","courseDate":"2022-10-14","courseVenue":"Ernakulam"},{"_id":"6348059e4584410016913537","courseTitle":"hi","courseDescription":"hello ","courseDuration":"50","courseDate":"2022-10-13","courseVenue":"idukki"},{"_id":"63482103161e8c001670ac99","courseTitle":"React","courseDescription":"ui/ux","courseDuration":"6 months","courseDate":"2022-10-14","courseVenue":"Mumbai"},{"_id":"63482e39a51b760016893744","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63483042a51b760016893745","courseTitle":"MCA","courseDescription":"shdsds","courseDuration":"2","courseDate":"2022-10-15","courseVenue":"hongkong"},{"_id":"634849fc675b07001629b8c8","courseTitle":"MBA","courseDuration":"5 hrs","courseDescription":"2 Year PG Course","courseDate":"2022-10-04","courseVenue":"Ernakulam"},{"_id":"63484a46675b07001629b8c9","courseTitle":"BBA","courseDescription":"3 year Course","courseDuration":"3","courseDate":"2022-10-05","courseVenue":"kochi"},{"_id":"6348660a9548000016a60008","courseTitle":"B.com","courseDescription":"3 year course","courseDuration":"3","courseDate":"2022-10-22","courseVenue":"Kannur"},{"_id":"6348660b9548000016a60009","courseTitle":"B.com","courseDescription":"3 year course","courseDuration":"3","courseDate":"2022-10-22","courseVenue":"Kannur"},{"_id":"6348d088d06ef00016879bcc","courseTitle":"python","courseDescription":"python course","courseDuration":"6month","courseDate":"2022-10-05","courseVenue":"kochi"},{"_id":"6348d1fad06ef00016879bcd","courseTitle":"c++","courseDescription":"c++ course","courseDuration":"1month","courseDate":"2022-09-28","courseVenue":"online"},{"_id":"6348de081426bb0016be834a","courseTitle":"MCA","courseDescription":"MCA","courseDuration":"3 Year","courseDate":"2022-10-25","courseVenue":"Ernakulam"},{"_id":"6348ee967e522f0016045aee","courseTitle":"mca","courseDescription":"master of computer application","courseDuration":"2yrs","courseDate":"2022-10-08","courseVenue":"kottayam"},{"_id":"6348f22c7e522f0016045aef","courseTitle":"c","courseDescription":"c course","courseDuration":"1 month","courseDate":"2022-10-22","courseVenue":"online"},{"_id":"6349078b68bbbc0016cedc7a","courseTitle":"Python Programming","courseDescription":"Crashcourse","courseDuration":"6","courseDate":"2022-10-19","courseVenue":"kochi"},{"_id":"6349089b68bbbc0016cedc7b","courseTitle":"python","courseDescription":"part-time","courseDuration":"2","courseDate":"2022-10-27","courseVenue":"kochi"},{"_id":"634908a568bbbc0016cedc7c","courseTitle":"hi","courseDescription":"ghfjfjbch hbfjhfjf njv","courseDuration":"34","courseDate":"2022-10-14","courseVenue":"idukki"},{"_id":"634908b068bbbc0016cedc7d","courseTitle":"B-tech","courseDescription":"8 semester","courseDuration":"4","courseDate":"2022-10-14","courseVenue":"Idukki"},{"_id":"634908b168bbbc0016cedc7e","courseTitle":"bcom","courseDescription":"BCOM","courseDuration":"3 yr","courseDate":"2022-09-28","courseVenue":"kottayam"},{"_id":"634908bc68bbbc0016cedc7f","courseTitle":"Java","courseDescription":"Learn more","courseDuration":"5","courseDate":"2022-10-15","courseVenue":"kochin"},{"_id":"634908c568bbbc0016cedc80","courseTitle":"New  Course","courseDescription":"its a new course","courseDuration":"4 months","courseDate":"2022-10-14","courseVenue":"kochi"},{"_id":"634908c668bbbc0016cedc81","courseTitle":"PHP","courseDescription":"Open Course","courseDuration":"2 Month","courseDate":"2022-10-21","courseVenue":"Kollam"},{"_id":"634908df68bbbc0016cedc82","courseTitle":"Full stack","courseDescription":"sample","courseDuration":"2","courseDate":"2022-10-10","courseVenue":"kochi"},{"_id":"634908e068bbbc0016cedc83","courseTitle":"MySQL","courseDescription":"crash course","courseDuration":"3 Months","courseDate":"2022-10-13","courseVenue":"Kottayam"},{"_id":"634908fd68bbbc0016cedc84","courseTitle":"php","courseDescription":"php course","courseDuration":"1 month","courseDate":"2022-10-16","courseVenue":"kochi"},{"_id":"6349090d68bbbc0016cedc85","courseTitle":"java programming","courseDescription":"core java","courseDuration":"3 months","courseDate":"2022-10-22","courseVenue":"Ernakulam"},{"_id":"6349092468bbbc0016cedc86","courseTitle":"MBA","courseDuration":"5 hrs","courseDescription":"2 yr","courseDate":"2022-10-13","courseVenue":"Ernakulam"},{"_id":"6349092968bbbc0016cedc87","courseTitle":"Mca","courseDescription":"2 year Course","courseDuration":"2","courseDate":"2022-10-02","courseVenue":"idukki"},{"_id":"6349092d68bbbc0016cedc88","courseTitle":"M.com","courseDescription":"full-time course","courseDuration":"2","courseDate":"2022-10-07","courseVenue":"Kochi"},{"_id":"6349093568bbbc0016cedc89","courseTitle":"Python","courseDescription":"Crash","courseDuration":"8","courseDate":"2022-10-01","courseVenue":"Koothatukulam"},{"_id":"6349093a68bbbc0016cedc8a","courseTitle":"Java","courseDescription":"Core Java ","courseDuration":"3","courseDate":"2022-04-08","courseVenue":"Kochi"},{"_id":"6349094d68bbbc0016cedc8b","courseTitle":"MCA","courseDescription":"MCA","courseDuration":"3 Year","courseDate":"2022-10-27","courseVenue":"Ernakulam"},{"_id":"6349095668bbbc0016cedc8c","courseTitle":"java","courseDescription":"part time","courseDuration":"2","courseDate":"2022-10-07","courseVenue":"kochi"},{"_id":"6349095a68bbbc0016cedc8d","courseTitle":"Angular","courseDescription":"ANGULAR FRAMWORK","courseDuration":"1 months","courseDate":"2022-10-05","courseVenue":"Kakkanad"},{"_id":"634909bf68bbbc0016cedc8e","courseTitle":"BCA","courseDescription":"Hi ","courseDuration":"2 MONTH","courseDate":"2022-10-14","courseVenue":"IDUKKI"},{"_id":"63490a2268bbbc0016cedc8f","courseTitle":"","courseDescription":"vvv","courseDuration":"","courseDate":"10-10-2022"},{"_id":"63490a5f68bbbc0016cedc90","courseTitle":"MCA","courseDescription":"PG in Computer Application","courseDuration":"2","courseDate":"2022-10-06","courseVenue":"Idukki"},{"_id":"63490beb68bbbc0016cedc91","courseTitle":"dsv","courseDescription":"","courseDuration":"sdavf ","courseDate":"","courseVenue":""},{"_id":"63490c1968bbbc0016cedc92","courseTitle":"","courseDuration":"","courseDescription":"","courseDate":"","courseVenue":""},{"_id":"63490c4968bbbc0016cedc93","courseTitle":"Mca","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490c6e68bbbc0016cedc94","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490c6e68bbbc0016cedc95","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490c6e68bbbc0016cedc96","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490c6e68bbbc0016cedc98","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490c6e68bbbc0016cedc97","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490c6e68bbbc0016cedc99","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490c6e68bbbc0016cedc9b","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490c6e68bbbc0016cedc9a","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490c9f68bbbc0016cedc9c","courseTitle":"Java","courseDescription":"Full stack","courseDuration":"1yr","courseDate":"2022-10-15","courseVenue":"Ktm"},{"_id":"63490ca268bbbc0016cedc9d","courseTitle":"C++","courseDescription":"One Year Course","courseDuration":"1 year","courseDate":"2022-11-05","courseVenue":"Kochi"},{"_id":"63490ca768bbbc0016cedc9e","courseTitle":"qswedfvgbhs","courseDescription":"ertfgh","courseDuration":"sdfghj","courseDate":"2022-10-14","courseVenue":"ertfygb"},{"_id":"63490cb868bbbc0016cedc9f","courseTitle":"MCA","courseDescription":"learning","courseDuration":"2","courseDate":"2022-10-23","courseVenue":"kochin"},{"_id":"63490cbb68bbbc0016cedca0","courseTitle":"MCA","courseDescription":"pg course","courseDuration":"3 Year","courseDate":"2022-10-19","courseVenue":"Ernakulam"},{"_id":"63490cc068bbbc0016cedca1","courseTitle":"PHP","courseDescription":"php","courseDuration":"4","courseDate":"2022-09-28","courseVenue":"Kottayam"},{"_id":"63490ccb68bbbc0016cedca2","courseTitle":"php","courseDescription":"php course","courseDuration":"2month","courseDate":"2022-10-12","courseVenue":"tvm"},{"_id":"63490cce68bbbc0016cedca3","courseTitle":"d","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490ccf68bbbc0016cedca4","courseTitle":"d","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490cd868bbbc0016cedca5","courseTitle":"Java","courseDescription":"Java basic concepts","courseDuration":"1","courseDate":"2022-10-03","courseVenue":"Trivandrum"},{"_id":"63490ce568bbbc0016cedca6","courseTitle":"Angular","courseDescription":"dd","courseDuration":"4","courseDate":"2022-10-15","courseVenue":"KKM"},{"_id":"63490cea68bbbc0016cedca7","courseTitle":"B-tech","courseDescription":"8 semester ","courseDuration":"4","courseDate":"2022-10-13","courseVenue":"Kozhikode"},{"_id":"63490cec68bbbc0016cedca8","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490ced68bbbc0016cedca9","courseTitle":"MCA","courseDescription":"PG in Computer Application","courseDuration":"4","courseDate":"2022-10-13","courseVenue":"Idukki"},{"_id":"63490cf168bbbc0016cedcaa","courseTitle":"BE","courseDescription":"4 years course","courseDuration":"4","courseDate":"2022-10-05","courseVenue":"kochi"},{"_id":"63490cfd68bbbc0016cedcab","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490d0068bbbc0016cedcac","courseTitle":"MCA","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490d0168bbbc0016cedcad","courseTitle":"MCA","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490d0a68bbbc0016cedcae","courseTitle":"Python","courseDescription":"Python fullstack","courseDuration":"3 months","courseDate":"2022-10-13","courseVenue":"Ernakulam"},{"_id":"63490d1968bbbc0016cedcaf","courseTitle":"BCA","courseDescription":"hi hello","courseDuration":"2 MONTH","courseDate":"2022-10-13","courseVenue":"IDUKKI"},{"_id":"63490d2468bbbc0016cedcb0","courseTitle":"MEAN STACK","courseDescription":"","courseDuration":"3Months","courseDate":""},{"_id":"63490d2968bbbc0016cedcb1","courseTitle":"Java","courseDescription":"hh","courseDuration":"3","courseDate":"2022-10-01","courseVenue":"KOllam"},{"_id":"63490d4768bbbc0016cedcb2","courseTitle":"B A English","courseDescription":"3 years course","courseDuration":"3","courseDate":"2022-10-15","courseVenue":"kochi"},{"_id":"63490d4d68bbbc0016cedcb3","courseTitle":"vb","courseDescription":"bxc","courseDuration":"bxc","courseDate":"10-10-2022"},{"_id":"63490d5168bbbc0016cedcb4","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":""},{"_id":"63490d5268bbbc0016cedcb5","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":""},{"_id":"63490d6c68bbbc0016cedcb6","courseTitle":"MEAN STACK","courseDescription":"","courseDuration":"","courseDate":""},{"_id":"63490ddf68bbbc0016cedcb7","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63490de168bbbc0016cedcb8","courseTitle":"java programming","courseDescription":"Python fullstack","courseDuration":"3 months","courseDate":"2022-10-19","courseVenue":"Ernakulam"},{"_id":"63490ed168bbbc0016cedcb9","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":""},{"_id":"63490f3a68bbbc0016cedcba","courseTitle":"DBMS","courseDescription":"Cash Course","courseDuration":"6 ","courseDate":"2022-11-01","courseVenue":"Kottayam"},{"_id":"63490f5768bbbc0016cedcbb","courseTitle":"MEAN STACK","courseDescription":"zxc","courseDuration":"czx","courseDate":"zxc"},{"_id":"63490fc868bbbc0016cedcbc","courseTitle":"Basic Coding","courseDescription":"Crash course","courseDuration":"1 Month","courseDate":"2022-11-01","courseVenue":"Kochi"},{"_id":"634ad38a3cab440016952f2a","courseTitle":"redhat","courseDescription":"nothing","courseDuration":"6 months","courseDate":"2022-10-15","courseVenue":"kakkanad"},{"_id":"634ad62f3cab440016952f2b","courseTitle":"ddsad","courseDescription":"safsafs","courseDuration":"asfsaf","courseDate":"2022-10-15","courseVenue":"safdsa"},{"_id":"634c4117fd34d60016bac4ee","courseTitle":"","courseDescription":"","courseDuration":"2","courseDate":"","courseVenue":""},{"_id":"63557b78b31b910016eee1ab","courseTitle":"MCA","courseDescription":"pg course","courseDuration":"3 Year","courseDate":"2022-11-03","courseVenue":"Ernakulam"},{"_id":"63557b78b31b910016eee1ad","courseTitle":"MCA","courseDescription":"pg course","courseDuration":"3 Year","courseDate":"2022-11-03","courseVenue":"Ernakulam"},{"_id":"63557b78b31b910016eee1ac","courseTitle":"MCA","courseDescription":"pg course","courseDuration":"3 Year","courseDate":"2022-11-03","courseVenue":"Ernakulam"},{"_id":"63557b78b31b910016eee1b0","courseTitle":"MCA","courseDescription":"pg course","courseDuration":"3 Year","courseDate":"2022-11-03","courseVenue":"Ernakulam"},{"_id":"63557b78b31b910016eee1ae","courseTitle":"MCA","courseDescription":"pg course","courseDuration":"3 Year","courseDate":"2022-11-03","courseVenue":"Ernakulam"},{"_id":"63557b78b31b910016eee1af","courseTitle":"MCA","courseDescription":"pg course","courseDuration":"3 Year","courseDate":"2022-11-03","courseVenue":"Ernakulam"},{"_id":"63557b78b31b910016eee1b1","courseTitle":"MCA","courseDescription":"pg course","courseDuration":"3 Year","courseDate":"2022-11-03","courseVenue":"Ernakulam"},{"_id":"636168e197c74a0016674e52","courseTitle":"Mean stack","courseDescription":"full stack program","courseDuration":"3 months","courseDate":"2245-03-23","courseVenue":"online"},{"_id":"63616a3997c74a0016674e53","courseTitle":"CSE","courseDescription":"computer science  and engineering","courseDuration":"4 year","courseDate":"2022-12-12","courseVenue":"Online"},{"_id":"63616bc597c74a0016674e54","courseTitle":"uiuo","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""}]
}
