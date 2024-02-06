package com.bridging.reactnative.bridge;
import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Objects;

public class  CustomActionsModule extends ReactContextBaseJavaModule {

    CustomActionsModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomActionsModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void goToNativeScreen() {
        Intent intent = new Intent(getCurrentActivity(), TextViewActivity.class);
        Objects.requireNonNull(getCurrentActivity()).startActivity(intent);
    }
}
