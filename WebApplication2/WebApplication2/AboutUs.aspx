<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="AboutUs.aspx.cs" Inherits="WebApplication2.WebForm5" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="about" class="x-section" style=" margin: 0px; padding: 0px; background-color: #ffffff;"><div class="x-container max width" style="margin: 0px auto; padding: 0px; ">
        <div class="x-column x-sm x-1-1" style="padding: 10px 0px 30px; ">
            <h2 class="h-custom-headline center-text  h3 accent"><span>ABOUT</span></h2></div></div></div><div id="x-section-9" class="x-section bg-image parallax" style="margin: 0px; padding: 0px; min-height: 350px; background-image: url(&quot;http://seiba.vancitythinktank.com/wp-content/uploads/2016/01/2SofasBlackened.jpg&quot;); background-color: transparent; background-position: 50% -34px;" data-x-element="section" data-x-params="{&quot;type&quot;:&quot;image&quot;,&quot;parallax&quot;:true}">
                        <div class="x-container max width marginless-columns" style="margin: 0px auto; padding: 50px 0px; ">
                            <div class="x-column x-sm x-1-1" style="padding: 0px; ">
                                <div class="x-text center-text" style="font-size:22px;color:#fff;">
                                    <p>We�re proud of the designs, homes and relationships we build with our customers. Our talented team continues to exemplify the hard-earned reputation for craftsmanship, professionalism and attention to detail we�ve earned over the years. We believe that OUR reputation is a direct result of our unwavering commitment to communication both with our customers, and, internally between the members of our team.</p>
                                    <p>Our �Dedicated Build Team� approach to servicing your needs, whether it be design, build or sourcing of land, ensures that everyone is accountable for every detail of the project. Period. This ensures there are always more than one set of eyes on everything we do. We work together to exceed your expectations, and our own, for craftsmanship and quality.</p>
                                    <p>We will partner with you to take you from concept to completion.</p>
                                </div>
                            </div>
                        </div>
    <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script><div style='overflow:hidden;height:440px;width:100%;'><div id='gmap_canvas' style='height:440px;width:100%;'></div><div><small><a href="http://embedgooglemaps.com">									embed google map							</a></small></div><div><small><a href="http://freedirectorysubmissionsites.com/">free web directories</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><script type='text/javascript'>function init_map(){var myOptions = {zoom:10,center:new google.maps.LatLng(31.2000924,29.91873869999995),mapTypeId: google.maps.MapTypeId.TERRAIN};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(31.2000924,29.91873869999995)});infowindow = new google.maps.InfoWindow({content:'<strong>Visit us</strong><br>Alexandria, Egypt.<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
   </div>
</asp:Content>
