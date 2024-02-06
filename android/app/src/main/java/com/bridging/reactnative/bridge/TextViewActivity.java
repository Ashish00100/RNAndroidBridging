package com.bridging.reactnative.bridge;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.bridging.reactnative.R;
import com.facebook.react.ReactApplication;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Objects;

public class TextViewActivity extends AppCompatActivity {

    EditText text;
    Button submit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_text_view);
        text = findViewById(R.id.textInput);
        submit = findViewById(R.id.home_screen);

        submit.setOnClickListener(v -> {
            try {
                Log.d("Input Value", String.valueOf(text.getText().toString()));
                Objects.requireNonNull(((ReactApplication) getApplicationContext()).getReactNativeHost().getReactInstanceManager().getCurrentReactContext())
                        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("goToReactScreen", text.getText().toString());


                finish();
            } catch (Exception e) {
                Toast.makeText(this, e.toString(), Toast.LENGTH_LONG).show();
            }
        });
    }
}