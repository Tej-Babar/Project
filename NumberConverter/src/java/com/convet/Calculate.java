
package com.convet;

import java.math.BigInteger;

/**
 *
 * @author tejas
 */
public class Calculate {
    
    static String Convert(String base,String req,String num){
        String res="Error";
        try {
            int basenum=Integer.parseInt(base);
            int reqnum=Integer.parseInt(req);
            
            BigInteger decimal = new BigInteger(num, basenum);
            res =  decimal.toString(reqnum);
            
        } catch (Exception e) {
            res="Invalid Number";
        }
        
        return res;
    }
}
