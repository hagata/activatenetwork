package com.changebox;

import com.facebook.react.ReactActivity;
import com.rogchap.react.modules.twilio.TwilioPackage;
import com.tkporter.sendsms.SendSMSPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "changeBox";
    }
}
