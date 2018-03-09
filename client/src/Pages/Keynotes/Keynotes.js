import React, { Component } from 'react';
import './../../CSS/Page.css';

class Keynotes extends Component {
  render() {
    return (
      <div className="Keynotes">
        KEYNOTE 1<br />
        Title: Tracing the Trajectory of Access Control Models in the New Cyber World<br />
        Authors: Indrakshi Ray, Professor, Computer Science Department, Colorado State University<br /> 
        <br />
        Abstract: With the growing use of smart devices and new applications, traditional access control models, such as discretionary and role-based models, are often found to be inadequate. New parameters, such as location and time, need to be taken into consideration in access control to provide enhanced security. We propose a spatio-temporal model and provide its formal semantics. The various features in our model give rise to constraints that may interact with each other. We demonstrate how an application using our model can be automatically analyzed to ensure that conflicts or security breaches do not occur. We conclude by discussing our future work that generalizes our proposed model and introduces interesting research questions.<br />
        <br />
        Biography:	Indrakshi Ray is a Professor in the Computer Science Department at Colorado State University. She has been a visiting faculty at Air Force Research Laboratory, Naval Research Laboratory, and at INRIA, Rocquencourt, France. She obtained her Ph.D. in Information Technology from George Mason University. Dr. Ray's research interests include security and privacy, database systems, and formal methods for software assurance. She is on the editorial board of IEEE Transactions on Dependable and Secure Computing and Computer Standards and Interfaces. She has been a guest editor of ACM Transactions of Information Systems Security and Journal of Digital Library. She was the Program Chair of ACM SACMAT 2006, Program Co-Chair for ICISS 2013, CSS 2013, IFIP DBSec 2003, and General Chair of SACMAT 2008.<br />
        KEYNOTE 2<br />
        Title: Dummy-based Approaches for Protecting Location Privacy<br />
        Authors: Takahiro Hara, Osaka University<br />
        <br />
        Abstract: According to the growth of mobile devices equipped with a GPS receiver, a variety of location based services (LBSs) have been launched. Since location information may reveal private information, preserving location privacy has become a significant issue. In this talk, we present our recent studies on this issue, which aim to be applicable to a real environment. Specifically, our approaches try to anonymize the user's location by generating dummies which we simulate to behave like real human. These also consider traceability of the user's locations to quickly recover from an accidental reveal of the user's location.<br />
        <br />
        Biography:	Takahiro Hara received the B.E., M.E., and Dr.E. degrees from Osaka University, Japan, in 1995, 1997, and 2000, respectively. Currently, he is a Distinguished Professor of the Department of Multimedia Engineering, Osaka University. He has published more than 440 peer reviewed papers, including a large number of papers published in top-ranked journals and conferences. He served as a Program Chair of IEEE MDM'06, 10, and 18, IEEE AINA'09 and 14, IEEE SRDS'12, Mobiquitous'13, IEEE UIC'14, and DaWaK'15 and 16. His research interests include distributed databases, mobile computing, and social computing. He is a distinguished scientist of ACM, a senior member of IEEE, and a member of three other learned societies.<br />
        KEYNOTE 3<br />
        Title: Towards Measuring Security and Privacy via Their Services and Mechanisms - A Position Statement<br />
        Authors: Leszek Lilien, Department of Computer Science, Western Michigan University<br />
        <br />
        Abstract: In contrast to a common view of security and privacy as inseparably intertwined, we split them into pure security, pure privacy, and intertwined security and privacy. We consider security in terms of security services, and privacy in terms of privacy services. In turn, each individual service is implemented by a set of mechanisms, with each mechanism implementing one or more services. We calculate the overall security measure and privacy measure in two steps. In Step 1, if possible, we define measures directly for each service. Otherwise, we define measures for each mechanism implementing a given service, and calculate the service-level measure from its mechanism-level constituents. In Step 2, we derive the overall security/privacy measure from its service-level constituents.<br />
        <br />
        Biography:	Leszek Lilien obtained his M.S. in Electronics/Computer Engineering from Wroclaw University of Technology, Poland, and Ph.D. in Computer Science from University of Pittsburgh. He has been a visiting faculty at Purdue University and Air Force Research Laboratory. Currently he is an Associate Professor of Computer Science at Western Michigan University. Dr. Lilien's paradigm- shifting research includes opportunistic resource utilization networks a.k.a. oppnets; active data bundles a.k.a. active bundles (self-protecting software entities); and pervasive trust foundation (underlying both security and privacy) for open computing environments. He is an Editorial Board member for six journals, has served as Technical Program Committee Co-Chair for IEEE SRDS 2012, and organized and chaired three SAHNS workshops (at IEEE ICDCS conferences). Dr. Lilien has many years of industry and entrepreneurial experience in the United States and Poland. He is IEEE Senior Member and IEEE Golden Core Member.
      </div>
    );
  }
}

export default Keynotes;