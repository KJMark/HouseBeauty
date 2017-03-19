<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="LogIn.aspx.cs" Inherits="WebApplication2.WebForm1" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h3 style="color: #000000; font-family: 'Buxton Sketch';">&nbsp; You're not a member? Join us now & 
    <a href="Regester.aspx">Regester</a> </h3>
    <asp:LoginView ID="LoginView1" runat="server">
        <AnonymousTemplate>
            <asp:Login ID="Login1" runat="server" CreateUserText="Regester" CreateUserUrl="~/Regester.aspx" DestinationPageUrl="~/ForUsers/Home.aspx" BackColor="White" Font-Bold="True" Font-Names="Century Gothic" Font-Size="Large" ForeColor="Black" Height="200px" Width="350px">
                <LoginButtonStyle BackColor="#333333" BorderColor="Blue" Font-Bold="True" Font-Size="Small" ForeColor="White" />
            </asp:Login>
        </AnonymousTemplate>
    </asp:LoginView>
</asp:Content>
