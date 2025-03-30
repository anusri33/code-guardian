package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/scan")
public class ScannerController {

    @PostMapping("/pa11y")
    public ResponseEntity<Map<String, String>> runPa11y(@RequestBody Map<String, String> request) {
        String url = request.get("url");
        Map<String, String> result = new HashMap<>();

        try {
            Process pa11y = Runtime.getRuntime().exec("C:\\Users\\anusr\\AppData\\Roaming\\npm\\pa11y.cmd " + url);
            BufferedReader reader = new BufferedReader(new InputStreamReader(pa11y.getInputStream()));
            StringBuilder pa11yOutput = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                pa11yOutput.append(line).append("\n");
            }

            result.put("pa11y", pa11yOutput.toString());
            return ResponseEntity.ok(result);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/wapiti")
    public ResponseEntity<Map<String, String>> runWapiti(@RequestBody Map<String, String> request) {
        String url = request.get("url");
        Map<String, String> result = new HashMap<>();

        try {
            String command = "wapiti -u " + url + " -f txt -o wapiti-output.txt";
            Process wapiti = Runtime.getRuntime().exec(command);
            wapiti.waitFor();

            BufferedReader reader = new BufferedReader(new FileReader("wapiti-output.txt"));
            StringBuilder wapitiOutput = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                wapitiOutput.append(line).append("\n");
            }

            result.put("wapiti", wapitiOutput.toString());
            return ResponseEntity.ok(result);

        } catch (IOException | InterruptedException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/run")
    public ResponseEntity<Map<String, String>> runCombinedScan(@RequestBody Map<String, String> request) {
        String url = request.get("url");
        Map<String, String> result = new HashMap<>();

        try {
            // Pa11y
            Process pa11y = Runtime.getRuntime().exec("C:\\Users\\anusr\\AppData\\Roaming\\npm\\pa11y.cmd " + url);
            BufferedReader pa11yReader = new BufferedReader(new InputStreamReader(pa11y.getInputStream()));
            StringBuilder pa11yOutput = new StringBuilder();
            String line;
            while ((line = pa11yReader.readLine()) != null) {
                pa11yOutput.append(line).append("\n");
            }

            // Wapiti
            Process wapiti = Runtime.getRuntime().exec("wapiti -u " + url + " -f txt -o wapiti-output.txt");
            wapiti.waitFor();
            BufferedReader wapitiReader = new BufferedReader(new FileReader("wapiti-output.txt"));
            StringBuilder wapitiOutput = new StringBuilder();
            while ((line = wapitiReader.readLine()) != null) {
                wapitiOutput.append(line).append("\n");
            }

            result.put("pa11y", pa11yOutput.toString());
            result.put("wapiti", wapitiOutput.toString());
            return ResponseEntity.ok(result);

        } catch (IOException | InterruptedException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", e.getMessage()));
        }
    }
}
