<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Regester.aspx.cs" Inherits="WebApplication2.WebForm2" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h4 style="color: #000000; font-family: 'Buxton Sketch'; ">&nbsp; Already have an account? <a href="LogIn.aspx">LogIn</a> </h4>
    <asp:CreateUserWizard ID="CreateUserWizard1" runat="server" CancelDestinationPageUrl="~/Home.aspx" ContinueDestinationPageUrl="~/ForUsers/Home.aspx" FinishDestinationPageUrl="~/ForUsers/Home.aspx" BackColor="White" Font-Bold="True" Font-Names="Century Gothic" Font-Size="Large" ForeColor="Black" Height="500px" Width="500px">
        <CreateUserButtonStyle BackColor="#333333" BorderColor="Blue" Font-Bold="True" Font-Names="Century Gothic" Font-Size="Medium" ForeColor="White" />
        <WizardSteps>
            <asp:CreateUserWizardStep runat="server" />
            <asp:CompleteWizardStep runat="server" />
        </WizardSteps>
    </asp:CreateUserWizard>
</asp:Content>
