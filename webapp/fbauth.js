window.DmAuth = (function() {
    // firebase config
    var config = {
        apiKey: "",
        authDomain: "dividendmanager-8ed75.firebaseapp.com",
        databaseURL: "https://dividendmanager-8ed75.firebaseio.com",
        projectId: "dividendmanager-8ed75",
        storageBucket: "",
        messagingSenderId: ""
      };
  
    // FirebaseUI config.
    var uiConfig = {
      callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
          //hide firebaseUi
          hideAllFirebaseAuthUi();
  
          //setup ui5 app if sign in successful
          setupDm();
  
          return false;
        },
        uiShown: function() {
          // The widget is rendered.
          hideFirebaseUILoader();
        }
      },
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ]
    };
  
    // hide loader control
    function hideFirebaseUILoader() {
      document.getElementById("loader").style.display = "none";
    }
  
    // hide loader control and auth container
    function hideAllFirebaseAuthUi() {
      document.getElementById("firebaseui-auth-container").style.display = "none";
      document.getElementById("loader").style.display = "none";
    }
  
    // hide ui5 body
    function hideDmContainer() {
      document.getElementById("content").style.display = "none";
    }
  
    // hide ui5 body
    function hideDmContainer() {
      document.getElementById("content").style.display = "block";
    }
  
    // setup Dm ui app
    function setupDividendsManager() {
      sap.ui.getCore().attachInit(function() {
        new sap.m.Shell({
            app: new sap.ui.core.ComponentContainer({
                height : "100%",
                name : "incc.DivdendsManager"
            })
        }).placeAt("content");
    });
    }
  
    // public methods
    return {
      getFirebaseConfig: function() {
        return config;
      },
      getUiConfig: function() {
        return uiConfig;
      },
      hideFirebaseAuthUiLoader: function() {
        hideFirebaseUILoader();
      },
      setupDm: function() {
        setupDividendsManager();
      },
      hideDm: function() {
        hideDmContainer();
      },
      showDm: function() {
        hideDmContainer();
      }
    };
  })();
