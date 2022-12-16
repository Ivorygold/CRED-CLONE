import React from "react";
import "./credAbout.css";

const CredAbout = () => {
  return (
    <div className="about-us ">
      <div className="wrapper max-width">
        <h2 className="about-us-heading">about CRED</h2>
        <p className="about-us-para">
          CRED is a members only credit card bill payment platform that rewards
          its members for clearing their credit card bills on time. CRED members
          get access to exclusive rewards and experiences from premier brands
          upon clearing their credit card bills on CRED.
        </p>

        <h2 className="about-us-heading">how does CRED reward their users?</h2>
        <p className="about-us-para">
          CRED partners with the best premier and luxury brands to bring you an
          unmatched experience at the end of every credit card bill payment
          cycle.
        </p>

        <h2 className="about-us-heading">how to earn rewards on CRED?</h2>
        <p className="about-us-para">
          members can earn rewards in two different ways. CRED coins & gems.
          CRED Coin Rewards: <br />- when you pay your credit card bill on CRED,
          for every rupee cleared on your bill you earn a CRED coin. <br />- you
          can then use earned CRED coins to claim exclusive rewards from
          different brands. CRED Gem Rewards:
          <br /> - for every person that you refer to CRED who makes a bill
          payment, you earn 10 gems.
        </p>

        <h2 className="about-us-heading">what do you get as a CRED Member?</h2>
        <p className="about-us-para">
          as a CRED member, you instantly make your credit card payment
          experience hassle-free by unlocking several perks only available to
          CRED members. <br />- seamless bill payment experience through modes
          like upi, net banking and debit cards <br />- timely credit card bill
          payment reminders <br />- automate your credit card bill payments{" "}
          <br />- expose hidden charges on your credit card with cred protect{" "}
          <br />- get real-time alerts on duplicate transactions on your credit
          card <br />- manage multiple credit cards on a single portal <br />-
          keep a realtime check on your credit score
        </p>

        <h2 className="about-us-heading">
          how does one become a member of CRED?
        </h2>
        <p className="about-us-para">
          you can apply to be a member by signing up on CRED with your name and
          valid mobile number(issued within India). CRED is India’s most
          trustworthy and creditworthy community. This means we are selective
          about the members we take. For membership an Experian credit score of
          750 or above is mandatory.
        </p>

        <h2 className="about-us-heading">how to know your credit score?</h2>
        <p className="about-us-para">
          upon becoming a member, you can check and refresh your credit score
          with a single click. CRED then proceeds to acquire your updated credit
          score through a CIBIL score soft inquiry. on CRED, you can access your
          credit score data anytime without any extra charges. as a member, this
          helps you keep regular checks on your credit score and re-evaluate
          your spending patterns to maintain a healthy credit status. CRED
          offers Equifax credit score checker, find your CRIF credit score for
          free, Experian credit score checker for free.
        </p>

        <h2 className="about-us-heading">banks supported on CRED</h2>
        <p className="about-us-para">
          CRED supports credit card bill payment for American Express, Standard
          Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL, PNB, and other
          top Indian banks. We support VISA, MasterCard, American Express &
          RuPay cards.
        </p>
        <div className="about-last-para">
          <p>
            <span>calculators: </span> SIP calculatorEMI calculatorPPF
            calculator home loan calculator car loan calculator fixed deposit
            calculator recurring deposit calculator simple loan calculator
            compound interest calculator
          </p>
          <p>
            <span>credit card bill payment: </span>
            American Express Standard Chartered HSBC HDFC | CICI | SBI | AXIS |
            RBL | PNB | YES Bank
          </p>
        </div>
      </div>
    </div>
  );
};

export default CredAbout;
