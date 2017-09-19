import React, { Component } from 'react'
import classNames from 'classnames'

class Background extends Component {

  state = {
    warp: false
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.warp && !this.state.warp) {
      this.setState({
        warp: true
      })
      setTimeout(() => {
        this.setState({ warp: false })
      }, 1000)
    }
  }

  render() {
    return (
      <svg
        id="warpSky"
        className={classNames(this.state.warp ? 'warp' : 'normal')}
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        height="480"
        width="640"
        viewBox="0 0 640 480"
      >
      <g><line x1="400" x2="360" y1="-166" y2="37"></line><circle cx="360" cy="37" r="1"></circle><line x1="-44" x2="138" y1="570" y2="405"></line><circle cx="138" cy="405" r="1"></circle><line x1="46" x2="183" y1="136" y2="188"></line><circle cx="183" cy="188" r="1"></circle><line x1="288" x2="304" y1="-146" y2="47"></line><circle cx="304" cy="47" r="1"></circle><line x1="274" x2="297" y1="398" y2="319"></line><circle cx="297" cy="319" r="1"></circle><line x1="-230" x2="45" y1="118" y2="179"></line><circle cx="45" cy="179" r="1"></circle><line x1="748" x2="534" y1="562" y2="401"></line><circle cx="534" cy="401" r="1"></circle><line x1="-254" x2="33" y1="522" y2="381"></line><circle cx="33" cy="381" r="1"></circle><line x1="294" x2="307" y1="30" y2="135"></line><circle cx="307" cy="135" r="1"></circle><line x1="564" x2="442" y1="646" y2="443"></line><circle cx="442" cy="443" r="1"></circle><line x1="-60" x2="130" y1="268" y2="254"></line><circle cx="130" cy="254" r="1"></circle><line x1="-36" x2="142" y1="690" y2="465"></line><circle cx="142" cy="465" r="1"></circle><line x1="630" x2="475" y1="352" y2="296"></line><circle cx="475" cy="296" r="1"></circle><line x1="632" x2="476" y1="670" y2="455"></line><circle cx="476" cy="455" r="1"></circle><line x1="416" x2="368" y1="358" y2="299"></line><circle cx="368" cy="299" r="1"></circle><line x1="-234" x2="43" y1="-150" y2="45"></line><circle cx="43" cy="45" r="1"></circle><line x1="-98" x2="111" y1="-128" y2="56"></line><circle cx="111" cy="56" r="1"></circle><line x1="54" x2="187" y1="256" y2="248"></line><circle cx="187" cy="248" r="1"></circle><line x1="806" x2="563" y1="-110" y2="65"></line><circle cx="563" cy="65" r="1"></circle><line x1="958" x2="639" y1="-118" y2="61"></line><circle cx="639" cy="61" r="1"></circle><line x1="-42" x2="139" y1="600" y2="420"></line><circle cx="139" cy="420" r="1"></circle><line x1="28" x2="174" y1="560" y2="400"></line><circle cx="174" cy="400" r="1"></circle><line x1="-26" x2="147" y1="-8" y2="116"></line><circle cx="147" cy="116" r="1"></circle><line x1="-176" x2="72" y1="94" y2="167"></line><circle cx="72" cy="167" r="1"></circle><line x1="-260" x2="30" y1="-12" y2="114"></line><circle cx="30" cy="114" r="1"></circle><line x1="406" x2="363" y1="-226" y2="7"></line><circle cx="363" cy="7" r="1"></circle><line x1="-132" x2="94" y1="224" y2="232"></line><circle cx="94" cy="232" r="1"></circle><line x1="756" x2="538" y1="464" y2="352"></line><circle cx="538" cy="352" r="1"></circle><line x1="-26" x2="147" y1="100" y2="170"></line><circle cx="147" cy="170" r="1"></circle><line x1="-210" x2="55" y1="316" y2="278"></line><circle cx="55" cy="278" r="1"></circle><line x1="396" x2="358" y1="630" y2="435"></line><circle cx="358" cy="435" r="1"></circle><line x1="654" x2="487" y1="-206" y2="17"></line><circle cx="487" cy="17" r="1"></circle><line x1="80" x2="200" y1="392" y2="316"></line><circle cx="200" cy="316" r="1"></circle><line x1="-162" x2="79" y1="-86" y2="77"></line><circle cx="79" cy="77" r="1"></circle><line x1="444" x2="382" y1="232" y2="236"></line><circle cx="382" cy="236" r="1"></circle><line x1="322" x2="321" y1="-82" y2="79"></line><circle cx="321" cy="79" r="1"></circle><line x1="410" x2="365" y1="92" y2="166"></line><circle cx="365" cy="166" r="1"></circle><line x1="588" x2="454" y1="630" y2="435"></line><circle cx="454" cy="435" r="1"></circle><line x1="496" x2="408" y1="40" y2="140"></line><circle cx="408" cy="140" r="1"></circle><line x1="408" x2="364" y1="-32" y2="104"></line><circle cx="364" cy="104" r="1"></circle><line x1="80" x2="200" y1="-174" y2="33"></line><circle cx="200" cy="33" r="1"></circle><line x1="886" x2="603" y1="470" y2="355"></line><circle cx="603" cy="355" r="1"></circle><line x1="522" x2="421" y1="254" y2="247"></line><circle cx="421" cy="247" r="1"></circle><line x1="-272" x2="24" y1="-50" y2="95"></line><circle cx="24" cy="95" r="1"></circle><line x1="-116" x2="102" y1="700" y2="470"></line><circle cx="102" cy="470" r="1"></circle><line x1="848" x2="584" y1="554" y2="397"></line><circle cx="584" cy="397" r="1"></circle><line x1="606" x2="463" y1="674" y2="457"></line><circle cx="463" cy="457" r="1"></circle><line x1="-30" x2="145" y1="168" y2="204"></line><circle cx="145" cy="204" r="1"></circle><line x1="676" x2="498" y1="-154" y2="43"></line><circle cx="498" cy="43" r="1"></circle><line x1="114" x2="217" y1="-92" y2="74"></line><circle cx="217" cy="74" r="1"></circle><line x1="554" x2="437" y1="244" y2="242"></line><circle cx="437" cy="242" r="1"></circle><line x1="-38" x2="141" y1="-168" y2="36"></line><circle cx="141" cy="36" r="1"></circle><line x1="470" x2="395" y1="-208" y2="16"></line><circle cx="395" cy="16" r="1"></circle><line x1="294" x2="307" y1="600" y2="420"></line><circle cx="307" cy="420" r="1"></circle><line x1="332" x2="326" y1="-212" y2="14"></line><circle cx="326" cy="14" r="1"></circle><line x1="8" x2="164" y1="74" y2="157"></line><circle cx="164" cy="157" r="1"></circle><line x1="608" x2="464" y1="200" y2="220"></line><circle cx="464" cy="220" r="1"></circle><line x1="220" x2="270" y1="-64" y2="88"></line><circle cx="270" cy="88" r="1"></circle><line x1="88" x2="204" y1="180" y2="210"></line><circle cx="204" cy="210" r="1"></circle><line x1="770" x2="545" y1="-222" y2="9"></line><circle cx="545" cy="9" r="1"></circle><line x1="430" x2="375" y1="646" y2="443"></line><circle cx="375" cy="443" r="1"></circle><line x1="-84" x2="118" y1="-118" y2="61"></line><circle cx="118" cy="61" r="1"></circle><line x1="748" x2="534" y1="-36" y2="102"></line><circle cx="534" cy="102" r="1"></circle><line x1="726" x2="523" y1="92" y2="166"></line><circle cx="523" cy="166" r="1"></circle><line x1="944" x2="632" y1="402" y2="321"></line><circle cx="632" cy="321" r="1"></circle><line x1="-118" x2="101" y1="340" y2="290"></line><circle cx="101" cy="290" r="1"></circle><line x1="670" x2="495" y1="248" y2="244"></line><circle cx="495" cy="244" r="1"></circle><line x1="658" x2="489" y1="292" y2="266"></line><circle cx="489" cy="266" r="1"></circle><line x1="-228" x2="46" y1="328" y2="284"></line><circle cx="46" cy="284" r="1"></circle><line x1="314" x2="317" y1="552" y2="396"></line><circle cx="317" cy="396" r="1"></circle><line x1="340" x2="330" y1="442" y2="341"></line><circle cx="330" cy="341" r="1"></circle><line x1="438" x2="379" y1="630" y2="435"></line><circle cx="379" cy="435" r="1"></circle><line x1="386" x2="353" y1="670" y2="455"></line><circle cx="353" cy="455" r="1"></circle><line x1="154" x2="237" y1="-2" y2="119"></line><circle cx="237" cy="119" r="1"></circle><line x1="-140" x2="90" y1="610" y2="425"></line><circle cx="90" cy="425" r="1"></circle><line x1="468" x2="394" y1="380" y2="310"></line><circle cx="394" cy="310" r="1"></circle><line x1="194" x2="257" y1="426" y2="333"></line><circle cx="257" cy="333" r="1"></circle><line x1="890" x2="605" y1="660" y2="450"></line><circle cx="605" cy="450" r="1"></circle><line x1="678" x2="499" y1="128" y2="184"></line><circle cx="499" cy="184" r="1"></circle><line x1="866" x2="593" y1="484" y2="362"></line><circle cx="593" cy="362" r="1"></circle><line x1="122" x2="221" y1="-60" y2="90"></line><circle cx="221" cy="90" r="1"></circle><line x1="-224" x2="48" y1="424" y2="332"></line><circle cx="48" cy="332" r="1"></circle><line x1="502" x2="411" y1="-62" y2="89"></line><circle cx="411" cy="89" r="1"></circle><line x1="630" x2="475" y1="-66" y2="87"></line><circle cx="475" cy="87" r="1"></circle><line x1="-136" x2="92" y1="26" y2="133"></line><circle cx="92" cy="133" r="1"></circle><line x1="204" x2="262" y1="152" y2="196"></line><circle cx="262" cy="196" r="1"></circle><line x1="640" x2="480" y1="-176" y2="32"></line><circle cx="480" cy="32" r="1"></circle><line x1="4" x2="162" y1="-222" y2="9"></line><circle cx="162" cy="9" r="1"></circle><line x1="-66" x2="127" y1="-88" y2="76"></line><circle cx="127" cy="76" r="1"></circle><line x1="388" x2="354" y1="546" y2="393"></line><circle cx="354" cy="393" r="1"></circle><line x1="806" x2="563" y1="538" y2="389"></line><circle cx="563" cy="389" r="1"></circle><line x1="938" x2="629" y1="50" y2="145"></line><circle cx="629" cy="145" r="1"></circle><line x1="-110" x2="105" y1="670" y2="455"></line><circle cx="105" cy="455" r="1"></circle><line x1="416" x2="368" y1="584" y2="412"></line><circle cx="368" cy="412" r="1"></circle><line x1="756" x2="538" y1="714" y2="477"></line><circle cx="538" cy="477" r="1"></circle><line x1="64" x2="192" y1="600" y2="420"></line><circle cx="192" cy="420" r="1"></circle><line x1="522" x2="421" y1="434" y2="337"></line><circle cx="421" cy="337" r="1"></circle><line x1="-88" x2="116" y1="122" y2="181"></line><circle cx="116" cy="181" r="1"></circle><line x1="-168" x2="76" y1="144" y2="192"></line><circle cx="76" cy="192" r="1"></circle><line x1="152" x2="236" y1="718" y2="479"></line><circle cx="236" cy="479" r="1"></circle><line x1="370" x2="345" y1="114" y2="177"></line><circle cx="345" cy="177" r="1"></circle><line x1="-136" x2="92" y1="10" y2="125"></line><circle cx="92" cy="125" r="1"></circle><line x1="-220" x2="50" y1="-138" y2="51"></line><circle cx="50" cy="51" r="1"></circle><line x1="618" x2="469" y1="456" y2="348"></line><circle cx="469" cy="348" r="1"></circle><line x1="896" x2="608" y1="-226" y2="7"></line><circle cx="608" cy="7" r="1"></circle><line x1="740" x2="530" y1="514" y2="377"></line><circle cx="530" cy="377" r="1"></circle><line x1="-230" x2="45" y1="70" y2="155"></line><circle cx="45" cy="155" r="1"></circle><line x1="350" x2="335" y1="242" y2="241"></line><circle cx="335" cy="241" r="1"></circle><line x1="-82" x2="119" y1="68" y2="154"></line><circle cx="119" cy="154" r="1"></circle><line x1="338" x2="329" y1="320" y2="280"></line><circle cx="329" cy="280" r="1"></circle><line x1="-52" x2="134" y1="66" y2="153"></line><circle cx="134" cy="153" r="1"></circle><line x1="842" x2="581" y1="150" y2="195"></line><circle cx="581" cy="195" r="1"></circle><line x1="176" x2="248" y1="136" y2="188"></line><circle cx="248" cy="188" r="1"></circle><line x1="654" x2="487" y1="148" y2="194"></line><circle cx="487" cy="194" r="1"></circle><line x1="672" x2="496" y1="666" y2="453"></line><circle cx="496" cy="453" r="1"></circle><line x1="74" x2="197" y1="642" y2="441"></line><circle cx="197" cy="441" r="1"></circle><line x1="502" x2="411" y1="596" y2="418"></line><circle cx="411" cy="418" r="1"></circle><line x1="202" x2="261" y1="588" y2="414"></line><circle cx="261" cy="414" r="1"></circle><line x1="-208" x2="56" y1="-194" y2="23"></line><circle cx="56" cy="23" r="1"></circle><line x1="138" x2="229" y1="-34" y2="103"></line><circle cx="229" cy="103" r="1"></circle><line x1="-288" x2="16" y1="118" y2="179"></line><circle cx="16" cy="179" r="1"></circle><line x1="-10" x2="155" y1="716" y2="478"></line><circle cx="155" cy="478" r="1"></circle><line x1="-40" x2="140" y1="-154" y2="43"></line><circle cx="140" cy="43" r="1"></circle><line x1="416" x2="368" y1="556" y2="398"></line><circle cx="368" cy="398" r="1"></circle><line x1="108" x2="214" y1="20" y2="130"></line><circle cx="214" cy="130" r="1"></circle><line x1="-46" x2="137" y1="170" y2="205"></line><circle cx="137" cy="205" r="1"></circle><line x1="750" x2="535" y1="168" y2="204"></line><circle cx="535" cy="204" r="1"></circle><line x1="734" x2="527" y1="62" y2="151"></line><circle cx="527" cy="151" r="1"></circle><line x1="558" x2="439" y1="474" y2="357"></line><circle cx="439" cy="357" r="1"></circle><line x1="622" x2="471" y1="-108" y2="66"></line><circle cx="471" cy="66" r="1"></circle><line x1="250" x2="285" y1="690" y2="465"></line><circle cx="285" cy="465" r="1"></circle><line x1="-230" x2="45" y1="-214" y2="13"></line><circle cx="45" cy="13" r="1"></circle><line x1="-66" x2="127" y1="72" y2="156"></line><circle cx="127" cy="156" r="1"></circle><line x1="590" x2="455" y1="-240" y2="0"></line><circle cx="455" cy="0" r="1"></circle><line x1="548" x2="434" y1="-110" y2="65"></line><circle cx="434" cy="65" r="1"></circle><line x1="-168" x2="76" y1="-92" y2="74"></line><circle cx="76" cy="74" r="1"></circle><line x1="456" x2="388" y1="-154" y2="43"></line><circle cx="388" cy="43" r="1"></circle><line x1="894" x2="607" y1="436" y2="338"></line><circle cx="607" cy="338" r="1"></circle><line x1="132" x2="226" y1="96" y2="168"></line><circle cx="226" cy="168" r="1"></circle><line x1="134" x2="227" y1="424" y2="332"></line><circle cx="227" cy="332" r="1"></circle><line x1="360" x2="340" y1="46" y2="143"></line><circle cx="340" cy="143" r="1"></circle><line x1="680" x2="500" y1="568" y2="404"></line><circle cx="500" cy="404" r="1"></circle><line x1="694" x2="507" y1="374" y2="307"></line><circle cx="507" cy="307" r="1"></circle><line x1="702" x2="511" y1="244" y2="242"></line><circle cx="511" cy="242" r="1"></circle><line x1="338" x2="329" y1="478" y2="359"></line><circle cx="329" cy="359" r="1"></circle><line x1="584" x2="452" y1="34" y2="137"></line><circle cx="452" cy="137" r="1"></circle><line x1="-100" x2="110" y1="696" y2="468"></line><circle cx="110" cy="468" r="1"></circle><line x1="916" x2="618" y1="-220" y2="10"></line><circle cx="618" cy="10" r="1"></circle><line x1="-42" x2="139" y1="382" y2="311"></line><circle cx="139" cy="311" r="1"></circle><line x1="756" x2="538" y1="174" y2="207"></line><circle cx="538" cy="207" r="1"></circle><line x1="456" x2="388" y1="-54" y2="93"></line><circle cx="388" cy="93" r="1"></circle><line x1="420" x2="370" y1="-78" y2="81"></line><circle cx="370" cy="81" r="1"></circle><line x1="562" x2="441" y1="266" y2="253"></line><circle cx="441" cy="253" r="1"></circle><line x1="588" x2="454" y1="400" y2="320"></line><circle cx="454" cy="320" r="1"></circle><line x1="-194" x2="63" y1="514" y2="377"></line><circle cx="63" cy="377" r="1"></circle><line x1="-134" x2="93" y1="534" y2="387"></line><circle cx="93" cy="387" r="1"></circle><line x1="130" x2="225" y1="646" y2="443"></line><circle cx="225" cy="443" r="1"></circle><line x1="238" x2="279" y1="-44" y2="98"></line><circle cx="279" cy="98" r="1"></circle><line x1="244" x2="282" y1="598" y2="419"></line><circle cx="282" cy="419" r="1"></circle><line x1="706" x2="513" y1="-16" y2="112"></line><circle cx="513" cy="112" r="1"></circle><line x1="76" x2="198" y1="198" y2="219"></line><circle cx="198" cy="219" r="1"></circle><line x1="-202" x2="59" y1="620" y2="430"></line><circle cx="59" cy="430" r="1"></circle><line x1="-98" x2="111" y1="282" y2="261"></line><circle cx="111" cy="261" r="1"></circle><line x1="386" x2="353" y1="-156" y2="42"></line><circle cx="353" cy="42" r="1"></circle><line x1="516" x2="418" y1="300" y2="270"></line><circle cx="418" cy="270" r="1"></circle><line x1="532" x2="426" y1="252" y2="246"></line><circle cx="426" cy="246" r="1"></circle><line x1="850" x2="585" y1="32" y2="136"></line><circle cx="585" cy="136" r="1"></circle><line x1="704" x2="512" y1="-90" y2="75"></line><circle cx="512" cy="75" r="1"></circle><line x1="208" x2="264" y1="406" y2="323"></line><circle cx="264" cy="323" r="1"></circle><line x1="764" x2="542" y1="40" y2="140"></line><circle cx="542" cy="140" r="1"></circle><line x1="78" x2="199" y1="294" y2="267"></line><circle cx="199" cy="267" r="1"></circle><line x1="-142" x2="89" y1="682" y2="461"></line><circle cx="89" cy="461" r="1"></circle><line x1="-290" x2="15" y1="-36" y2="102"></line><circle cx="15" cy="102" r="1"></circle><line x1="746" x2="533" y1="300" y2="270"></line><circle cx="533" cy="270" r="1"></circle><line x1="-276" x2="22" y1="574" y2="407"></line><circle cx="22" cy="407" r="1"></circle><line x1="-250" x2="35" y1="406" y2="323"></line><circle cx="35" cy="323" r="1"></circle><line x1="154" x2="237" y1="116" y2="178"></line><circle cx="237" cy="178" r="1"></circle><line x1="286" x2="303" y1="252" y2="246"></line><circle cx="303" cy="246" r="1"></circle><line x1="-168" x2="76" y1="-66" y2="87"></line><circle cx="76" cy="87" r="1"></circle><line x1="846" x2="583" y1="512" y2="376"></line><circle cx="583" cy="376" r="1"></circle><line x1="654" x2="487" y1="360" y2="300"></line><circle cx="487" cy="300" r="1"></circle><line x1="648" x2="484" y1="566" y2="403"></line><circle cx="484" cy="403" r="1"></circle><line x1="176" x2="248" y1="350" y2="295"></line><circle cx="248" cy="295" r="1"></circle><line x1="346" x2="333" y1="124" y2="182"></line><circle cx="333" cy="182" r="1"></circle><line x1="838" x2="579" y1="-240" y2="0"></line><circle cx="579" cy="0" r="1"></circle><line x1="-294" x2="13" y1="498" y2="369"></line><circle cx="13" cy="369" r="1"></circle><line x1="822" x2="571" y1="22" y2="131"></line><circle cx="571" cy="131" r="1"></circle><line x1="88" x2="204" y1="590" y2="415"></line><circle cx="204" cy="415" r="1"></circle><line x1="-72" x2="124" y1="366" y2="303"></line><circle cx="124" cy="303" r="1"></circle><line x1="268" x2="294" y1="-136" y2="52"></line><circle cx="294" cy="52" r="1"></circle><line x1="-194" x2="63" y1="374" y2="307"></line><circle cx="63" cy="307" r="1"></circle><line x1="956" x2="638" y1="-122" y2="59"></line><circle cx="638" cy="59" r="1"></circle><line x1="646" x2="483" y1="-116" y2="62"></line><circle cx="483" cy="62" r="1"></circle><line x1="202" x2="261" y1="716" y2="478"></line><circle cx="261" cy="478" r="1"></circle><line x1="718" x2="519" y1="436" y2="338"></line><circle cx="519" cy="338" r="1"></circle><line x1="786" x2="553" y1="130" y2="185"></line><circle cx="553" cy="185" r="1"></circle><line x1="-30" x2="145" y1="360" y2="300"></line><circle cx="145" cy="300" r="1"></circle><line x1="-222" x2="49" y1="566" y2="403"></line><circle cx="49" cy="403" r="1"></circle><line x1="-92" x2="114" y1="498" y2="369"></line><circle cx="114" cy="369" r="1"></circle><line x1="932" x2="626" y1="124" y2="182"></line><circle cx="626" cy="182" r="1"></circle><line x1="190" x2="255" y1="534" y2="387"></line><circle cx="255" cy="387" r="1"></circle><line x1="134" x2="227" y1="296" y2="268"></line><circle cx="227" cy="268" r="1"></circle><line x1="600" x2="460" y1="-104" y2="68"></line><circle cx="460" cy="68" r="1"></circle><line x1="-80" x2="120" y1="698" y2="469"></line><circle cx="120" cy="469" r="1"></circle><line x1="-74" x2="123" y1="252" y2="246"></line><circle cx="123" cy="246" r="1"></circle><line x1="-186" x2="67" y1="304" y2="272"></line><circle cx="67" cy="272" r="1"></circle><line x1="440" x2="380" y1="14" y2="127"></line><circle cx="380" cy="127" r="1"></circle><line x1="576" x2="448" y1="236" y2="238"></line><circle cx="448" cy="238" r="1"></circle><line x1="828" x2="574" y1="662" y2="451"></line><circle cx="574" cy="451" r="1"></circle><line x1="90" x2="205" y1="-78" y2="81"></line><circle cx="205" cy="81" r="1"></circle><line x1="696" x2="508" y1="634" y2="437"></line><circle cx="508" cy="437" r="1"></circle><line x1="-18" x2="151" y1="-6" y2="117"></line><circle cx="151" cy="117" r="1"></circle><line x1="742" x2="531" y1="488" y2="364"></line><circle cx="531" cy="364" r="1"></circle><line x1="746" x2="533" y1="324" y2="282"></line><circle cx="533" cy="282" r="1"></circle><line x1="74" x2="197" y1="692" y2="466"></line><circle cx="197" cy="466" r="1"></circle><line x1="-272" x2="24" y1="214" y2="227"></line><circle cx="24" cy="227" r="1"></circle><line x1="748" x2="534" y1="358" y2="299"></line><circle cx="534" cy="299" r="1"></circle><line x1="418" x2="369" y1="694" y2="467"></line><circle cx="369" cy="467" r="1"></circle><line x1="-276" x2="22" y1="236" y2="238"></line><circle cx="22" cy="238" r="1"></circle><line x1="-66" x2="127" y1="56" y2="148"></line><circle cx="127" cy="148" r="1"></circle><line x1="198" x2="259" y1="480" y2="360"></line><circle cx="259" cy="360" r="1"></circle><line x1="-312" x2="4" y1="698" y2="469"></line><circle cx="4" cy="469" r="1"></circle><line x1="528" x2="424" y1="-92" y2="74"></line><circle cx="424" cy="74" r="1"></circle><line x1="576" x2="448" y1="-174" y2="33"></line><circle cx="448" cy="33" r="1"></circle><line x1="130" x2="225" y1="342" y2="291"></line><circle cx="225" cy="291" r="1"></circle><line x1="196" x2="258" y1="110" y2="175"></line><circle cx="258" cy="175" r="1"></circle><line x1="388" x2="354" y1="20" y2="130"></line><circle cx="354" cy="130" r="1"></circle><line x1="546" x2="433" y1="-78" y2="81"></line><circle cx="433" cy="81" r="1"></circle><line x1="528" x2="424" y1="-98" y2="71"></line><circle cx="424" cy="71" r="1"></circle><line x1="318" x2="319" y1="128" y2="184"></line><circle cx="319" cy="184" r="1"></circle><line x1="526" x2="423" y1="-146" y2="47"></line><circle cx="423" cy="47" r="1"></circle><line x1="-152" x2="84" y1="-240" y2="0"></line><circle cx="84" cy="0" r="1"></circle><line x1="226" x2="273" y1="244" y2="242"></line><circle cx="273" cy="242" r="1"></circle><line x1="-156" x2="82" y1="-124" y2="58"></line><circle cx="82" cy="58" r="1"></circle><line x1="-94" x2="113" y1="-78" y2="81"></line><circle cx="113" cy="81" r="1"></circle><line x1="126" x2="223" y1="-154" y2="43"></line><circle cx="223" cy="43" r="1"></circle><line x1="204" x2="262" y1="138" y2="189"></line><circle cx="262" cy="189" r="1"></circle><line x1="104" x2="212" y1="224" y2="232"></line><circle cx="212" cy="232" r="1"></circle><line x1="-188" x2="66" y1="414" y2="327"></line><circle cx="66" cy="327" r="1"></circle><line x1="-190" x2="65" y1="214" y2="227"></line><circle cx="65" cy="227" r="1"></circle><line x1="832" x2="576" y1="-140" y2="50"></line><circle cx="576" cy="50" r="1"></circle><line x1="-72" x2="124" y1="142" y2="191"></line><circle cx="124" cy="191" r="1"></circle><line x1="490" x2="405" y1="418" y2="329"></line><circle cx="405" cy="329" r="1"></circle><line x1="758" x2="539" y1="6" y2="123"></line><circle cx="539" cy="123" r="1"></circle><line x1="636" x2="478" y1="562" y2="401"></line><circle cx="478" cy="401" r="1"></circle><line x1="730" x2="525" y1="606" y2="423"></line><circle cx="525" cy="423" r="1"></circle><line x1="820" x2="570" y1="448" y2="344"></line><circle cx="570" cy="344" r="1"></circle><line x1="-54" x2="133" y1="104" y2="172"></line><circle cx="133" cy="172" r="1"></circle><line x1="310" x2="315" y1="282" y2="261"></line><circle cx="315" cy="261" r="1"></circle><line x1="-172" x2="74" y1="-100" y2="70"></line><circle cx="74" cy="70" r="1"></circle></g>
      </svg>
    )
  }
}

export default Background
